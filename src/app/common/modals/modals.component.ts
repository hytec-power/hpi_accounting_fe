import {Component, ElementRef, ViewChild} from '@angular/core';
import {ButtonComponent} from "../button/button.component";
import {NgIf} from "@angular/common";

@Component({
    selector: 'modals',
    imports: [
        ButtonComponent,
        NgIf
    ],
    templateUrl: './modals.component.html',
    styleUrl: './modals.component.scss'
})
export class ModalsComponent {
  @ViewChild('modal',{static: true,read: ElementRef}) dom_modal!: ElementRef;
  title: string = '';
  message: string = '';
  positive_text: string = '';
  negative_text: string = '';
  positive_fn!: Function;
  negative_fn!: Function;
  type: 'info'|'confirm'|'confirm-warning' = 'info';
  constructor() {
  }
  ngOnInit(){
  }
  public showInfo(title: string,
                  message: string,
                  positiveText: string,
                  positiveFn: Function = ()=>{}){
    this.title = title;
    this.message = message;
    this.positive_text = positiveText;
    this.positive_fn = positiveFn;
    this.type = 'info';
    this.onShow();
  }
  public showConfirm(title: string,
                     message: string,
                     positiveText: string,
                     negativeText:string,
                     positiveFn: Function = ()=>{},
                     negativeFn: Function = ()=>{}){

    this.title = title;
    this.message = message;
    this.positive_text = positiveText;
    this.negative_text = negativeText;
    this.positive_fn = positiveFn;
    this.negative_fn = negativeFn;
    this.type = 'confirm';
    this.onShow();

  }
  public showConfirmWarning(title: string,
                            message: string,
                            positiveText: string,
                            negativeText:string,
                            positiveFn: Function = ()=>{},
                            negativeFn: Function = ()=>{}){

    this.title = title;
    this.message = message;
    this.positive_text = positiveText;
    this.negative_text = negativeText;
    this.positive_fn = positiveFn;
    this.negative_fn = negativeFn;
    this.type = 'confirm-warning';
    this.onShow();
  }
  positiveAction(){
    if(this.positive_fn){
      this.positive_fn();
    }
    this.onDismiss();
  }
  negativeAction(){
    if(this.negative_fn){
      this.negative_fn();
    }
    this.onDismiss();
  }
  onDismiss(){
    this.dom_modal.nativeElement.close();
  }
  onShow(){
    this.dom_modal.nativeElement.showModal();
  }
}
