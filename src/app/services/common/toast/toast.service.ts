import {Injectable, signal, WritableSignal} from '@angular/core';
import {ToastComponent, ToastItem} from "src/app/common/toast/toast.component";

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  component!: ToastComponent;
  toast_items: WritableSignal<ToastItem[]> = signal([]);
  constructor() {}
  bindComponent(component: ToastComponent){
    this.component = component;
  }
  getComponent(){

  }
  makeToast(style: 'success'|'warning'|'error' | 'info', message: string, time: number){
    const item: ToastItem = {
      message: message,
      style: style,
      time: time,
      type: 'timed',
      elapsed: 0
    };
    this.queueToast(item);
    const interval =  setInterval(()=>{
      item.elapsed += 1000;
      if(item.elapsed >= item.time){
        this.removeToast(item);
        clearInterval(interval);
      }
    },1000);
    return item;
  }
  makeStaticToast(style: 'success'|'warning'|'error'| 'info'|'loading', message: string){
    const item: ToastItem = {
      message: message,
      style: style,
      time: 0,
      type: 'static',
      elapsed: 0
    };
    this.queueToast(item);
    return item;
  }
  queueToast(toast: ToastItem){
    this.toast_items.update( value=> [...value,toast] );
  }
  removeToast(toast: ToastItem){
    this.toast_items.update(value=> value.filter(el=> el!= toast));
  }
  getItems(){
    return this.toast_items;
  }
}
