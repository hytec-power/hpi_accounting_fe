import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LoaderBouncingBallsComponent} from "src/app/common/loader-bouncing-balls/loader-bouncing-balls.component";
import {AuthService} from "src/app/services/auth/auth.service";
import * as qs from "qs";
import {OauthResponse} from "src/app/interfaces/oauth-response";

@Component({
  selector: 'app-oauth',
  imports: [
    LoaderBouncingBallsComponent
  ],
  templateUrl: './oauth.component.html',
  styleUrl: './oauth.component.scss'
})
export class OauthComponent {
  token: string = '';
  access_token: string = '';
  oauth_response!: OauthResponse;
  constructor(private ac: ActivatedRoute,
              private router: Router,
              private auth: AuthService) {
    this.token = this.ac.snapshot.queryParamMap.get('token')?? '';
    this.oauth_response = new Object(qs.parse(this.ac.snapshot.fragment??'')) as OauthResponse;

  }
  ngOnInit() {
    if(this.hasError()){
      this.router.navigateByUrl('/login');
      console.error('Oauth Error');
      return;
    }
  }
  apiLogin(token: string){
    this.auth.oauthLogin(token).subscribe({
      next: data => console.log(data),
      error: error => console.log(error),
      complete: () => this.redirect()
    });
  }
  redirect(){
    this.router.navigate([this.auth.getRedirectUrl()]);
  }
  hasError(){
    return this.oauth_response.hasOwnProperty('error');

  }
}
