import { Component } from '@angular/core';
import {AuthService} from "src/app/services/auth/auth.service";
import {LoaderBouncingBallsComponent} from "src/app/common/loader-bouncing-balls/loader-bouncing-balls.component";
import {Router} from "@angular/router";

@Component({
    selector: 'app-auth',
  imports: [
    LoaderBouncingBallsComponent
  ],
    templateUrl: './auth.component.html',
    styleUrl: './auth.component.scss'
})
export class AuthComponent {
  loading = true;
  constructor(private auth: AuthService,
              private router: Router) {}
  ngOnInit(){
    this.apiValidate();
  }
  apiValidate(){
    this.loading = true;
    this.auth.validateSession()
        .subscribe({
          error: (error) => this.loading = false,
          complete: () => this.redirect()
        });
  }
  oauthLogin(){
    window.location.href = this.auth.getOauthUrl();
  }
  redirect(){
      this.router.navigate([this.auth.getRedirectUrl()]);
  }
}
