import {Injectable, signal, WritableSignal} from '@angular/core';
import {environment} from "src/environments/environment";
import {AppStateService} from "src/app/services/app-state/app-state.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   api: string = `${environment.apiUrl}/auth`;
   auth_authenticated: WritableSignal<boolean> = signal(false);
  constructor(private appState: AppStateService) {
    this.appState.registerState('auth_authenticated',this.auth_authenticated,false);
  }
  getOauthUrl(){
    return `${environment.oauth_login_url}?client_key=${this.getOauthKey()}`
  }
  getOauthKey(){
    return environment.oauth_client_key
  }
  getAuthState(){
    return this.auth_authenticated;
  }
  isAuthenticated(){
    return this.auth_authenticated();
  }
}
