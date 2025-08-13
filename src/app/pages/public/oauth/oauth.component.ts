import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LoaderBouncingBallsComponent} from "src/app/common/loader-bouncing-balls/loader-bouncing-balls.component";
import {AuthService} from "src/app/services/auth/auth.service";
import * as qs from "qs";

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
  oauth_response: any = {};
  constructor(private ac: ActivatedRoute,
              private router: Router,
              private auth: AuthService) {
    this.token = this.ac.snapshot.queryParamMap.get('token')?? '';
    this.oauth_response = qs.parse(this.ac.snapshot.fragment??'');
    console.log(this.oauth_response);


  }
  ngOnInit() {
    if(this.hasError()){
      this.router.navigateByUrl('/login');
      console.error('Oauth Error');
      return;
    }
    // if(!this.token){
    //   console.error('No access token provided.');
    //   return;
    // }
    // this.apiLogin(this.token)
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
