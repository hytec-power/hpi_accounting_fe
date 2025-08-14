import {Injectable, WritableSignal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  keys: string[]=[];
  keyStates: Map<string,WritableSignal<any>> = new Map();
  constructor() {
    this.initStorageListener();
  }
  private initStorageListener(){
    addEventListener("storage", ()=> this.updateKeys())
  }
  private updateKeys(){
      this.keyStates.forEach((signal,key)=> signal.set(this.readKey(key)));
  }
  private readKey(key :string){
      const store = localStorage.getItem(key);
      return store ? JSON.parse(store).value : null
  }
  public storeKey(key: string, signal: WritableSignal<any>){
      this.readKey(key) !== signal () && localStorage.setItem(key,JSON.stringify({ value: signal() } )) ;
  }

  registerState(key: string, signal: WritableSignal<any>,default_value: any){
      const stored_value = this.readKey(key);
      stored_value ? signal.set(stored_value) : signal.set(default_value);
      !stored_value && this.storeKey(key,signal);
      this.keyStates.set(key,signal);
  }
}