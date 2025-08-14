import {computed, effect, Injectable, Signal, signal, WritableSignal} from '@angular/core';
import {environment} from "src/environments/environment";
import {AppStateService} from "src/app/services/app-state/app-state.service";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs";
import {CurrentUser} from "src/app/interfaces/current-user";
import {Router} from "@angular/router";
import {OauthResponse} from "src/app/interfaces/oauth-response";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   api: string = `${environment.apiUrl}/auth`;
   current_user: WritableSignal<CurrentUser|null> = signal(null);
   authenticated: Signal<boolean> = computed(()=> !!this.current_user());
   oauth_session: WritableSignal<OauthResponse|null> = signal(null);
  constructor(private appState: AppStateService,
              private http: HttpClient,
              private router: Router) {
    this.appState.registerState('auth_current_user',this.current_user,false);
    this.appState.registerState('oauth',this.oauth_session,null);
    effect(() => this.appState.storeKey('auth_current_user',this.current_user));
  }
  oauthLogin(token: string){
    return this.http.post<CurrentUser>(`${this.api}/oauth`,{token:token},{observe: 'body'});
  }
  validateSession(){
      return this.http.get(`${this.api}/validate`,{observe: 'response'});
  }
  validateOauth(){
    return this.http.post(`https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=accessToken`,{observe: 'response'});
  }
  getOauthUrl(){
    let url = `${environment.oauth_login_url}?`;
    url+=`client_id=${environment.oauth_client_id}`;
    url+=`&redirect_uri=${environment.oauth_redirect_url}`;
    url+=`&prompt=select_account`;
    url+=`&response_type=token`;
    url+=`&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile`;
    return encodeURI(url);
  }
  getOauthSession(){
    return this.oauth_session();
  }
  logout(){
    this.http.get(`${this.api}/logout`,{observe: 'response'}).subscribe();
    this.current_user.set(null);
    localStorage.clear();
    this.router.navigate(['/login']);
  }
  getAuthState(){
    return this.authenticated;
  }
  getCurrentUser(){
    return this.current_user();
  }
  getCurrentRole(){
    return this.current_user()?.role.name?? null;
  }
  getRedirectUrl(){
    switch(this.current_user()?.role.name){
      case 'employee': return '/employee';
      case 'accountant': return '/accounting/budget-requests';
      case 'system_admin': return '/admin';
      default: return '/login';
    }
  }
  isAuthenticated(){
    return this.authenticated();
  }
  getAuthToken(){
    return this.current_user()?.token ?? '';
  }
  setCurrentUser(user: CurrentUser){
    this.current_user.set(user);
  }

}
