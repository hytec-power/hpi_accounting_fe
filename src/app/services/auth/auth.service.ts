import { Injectable } from '@angular/core';
import {environment} from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   api: string = `${environment.apiUrl}/auth`;
  constructor() { }
  getOauthUrl(){
    return `${environment.oauth_login_url}?client_key=${this.getOauthKey()}`
  }
  getOauthKey(){
    return environment.oauth_client_key
  }
}
