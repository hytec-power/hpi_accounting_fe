import {Component, computed, effect, ElementRef, signal, untracked, ViewChild, WritableSignal} from '@angular/core';
import {NgOptimizedImage, TitleCasePipe} from "@angular/common";
import {AuthService} from "src/app/services/auth/auth.service";
import {ThemeService} from "src/app/services/theme/theme.service";
import {FormsModule} from "@angular/forms";
import {CurrentUser} from "src/app/interfaces/current-user";

@Component({
    selector: 'common-header',
  imports: [
    NgOptimizedImage,
    FormsModule,
    TitleCasePipe
  ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @ViewChild('user_container',{ static: true}) user_container !: ElementRef;
  current_theme: WritableSignal<string>;
  dark_mode: WritableSignal<boolean>;
  current_user!: CurrentUser| null
  constructor(private auth: AuthService,
              private themes: ThemeService) {
      this.current_theme = this.themes.getTheme();
      this.dark_mode = signal(this.current_theme() === 'dark')
      this.current_user = this.auth.getCurrentUser();
      effect(() => { const dark = this.dark_mode(); this.toggleTheme(dark); });

  }
  logout(){
    this.auth.logout();
  }
  test(){
    this.user_container.nativeElement.blur();
  }
  toggleTheme(dark: boolean){
      this.themes.setTheme(dark? 'dark' : 'light');
  }
}
