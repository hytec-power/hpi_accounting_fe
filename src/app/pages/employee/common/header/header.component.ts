import {Component, ElementRef, ViewChild} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {AuthService} from "src/app/services/auth/auth.service";

@Component({
  selector: 'employee-header',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @ViewChild('user_container',{ static: true}) user_container !: ElementRef;
  constructor(private auth: AuthService) {
  }
  logout(){
    this.auth.logout();
  }
  test(){
    this.user_container.nativeElement.blur();
  }
}
