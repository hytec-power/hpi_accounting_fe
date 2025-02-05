import {effect, Injectable, signal, WritableSignal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  color_scheme: WritableSignal<'dark'|'light'>  = signal('light');
  constructor() {
    effect(() => this.setRootTheme(this.color_scheme()));
  }
  setRootTheme(theme: 'dark'|'light'){
    document.documentElement.style.setProperty('color-scheme', theme);
  }
}
