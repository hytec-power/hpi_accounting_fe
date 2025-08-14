import { Component } from '@angular/core';
import {AuthService} from "src/app/services/auth/auth.service";

@Component({
    selector: 'app-auth',
    imports: [],
    templateUrl: './auth.component.html',
    styleUrl: './auth.component.scss'
})
export class AuthComponent {

  constructor(private auth: AuthService) {}
  ngOnInit(){}
  oauthLogin(){
    window.location.href = this.auth.getOauthUrl();
  }
}
