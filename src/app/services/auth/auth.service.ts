import {Injectable, signal, WritableSignal} from '@angular/core';
import {environment} from "src/environments/environment";
import {AppStateService} from "src/app/services/app-state/app-state.service";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs";
import {CurrentUser} from "src/app/interfaces/current-user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   api: string = `${environment.apiUrl}/auth`;
   authenticated: WritableSignal<boolean> = signal(false);
   current_user: WritableSignal<CurrentUser|null> = signal(null);
  constructor(private appState: AppStateService,
              private http: HttpClient) {
    this.appState.registerState('auth_state',this.authenticated,false);
  }
  getOauthUrl(){
    return `${environment.oauth_login_url}?client_key=${this.getOauthKey()}`
  }
  getOauthKey(){
    return environment.oauth_client_key
  }
  oauthLogin(token: string){
    return this.http
               .post<CurrentUser>(`${this.api}/login`,{token: token},{ observe: 'body' })
               .pipe( tap(data => this.setCurrentUser(data)));
  }
  getAuthState(){
    return this.authenticated;
  }
  getCurrentUser(){
    return this.current_user();
  }
  isAuthenticated(){
    return this.authenticated();
  }
  setCurrentUser(user: CurrentUser){
    this.current_user.set(user);
  }
}
