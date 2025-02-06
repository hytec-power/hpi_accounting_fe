import {effect, Injectable, signal, WritableSignal} from '@angular/core';
import {AppStateService} from "src/app/services/app-state/app-state.service";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  color_scheme: WritableSignal<string>  = signal('light');
  constructor(private appState: AppStateService) {
    this.appState.registerState('theme',this.color_scheme,'dark')
    effect(() => this.setRootTheme(this.color_scheme()));
    effect(() => this.appState.storeKey('theme',this.color_scheme));
  }
  setTheme(theme: string){
    this.color_scheme.set(theme);
  }
  setRootTheme(theme: string){
    document.documentElement.style.setProperty('color-scheme', theme);
  }

}
