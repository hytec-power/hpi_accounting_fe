import {effect, Injectable, signal, WritableSignal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  color_scheme: WritableSignal<string>  = signal('light');
  constructor() {
    this.initStorageListener();
    effect(() => this.setRootTheme(this.color_scheme()));
    effect(() => localStorage.setItem('theme',this.color_scheme()));
  }
  initStorageListener(){
    addEventListener("storage",ev => {
      const stored_value = localStorage.getItem('theme');
        if(stored_value!=this.color_scheme()){
        this.color_scheme.set(stored_value ?? 'dark' );
      }
    })
  }
  setTheme(theme: string){
    this.color_scheme.set(theme);
  }
  setRootTheme(theme: string){
    document.documentElement.style.setProperty('color-scheme', theme);
  }

}
