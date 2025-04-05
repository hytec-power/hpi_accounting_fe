import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LoaderBouncingBallsComponent} from "src/app/common/loader-bouncing-balls/loader-bouncing-balls.component";
import {AuthService} from "src/app/services/auth/auth.service";

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
  constructor(private ac: ActivatedRoute,
              private auth: AuthService) {
    this.token = this.ac.snapshot.queryParamMap.get('token')?? '';

  }
  ngOnInit() {
    if(!this.token){
      console.error('No access token provided.');
      return;
    }
    this.apiLogin(this.token)
  }
  apiLogin(token: string){
    this.auth.oauthLogin(token).subscribe({
      next: data => console.log(data),
      error: error => console.log(error),
    });
  }
}
