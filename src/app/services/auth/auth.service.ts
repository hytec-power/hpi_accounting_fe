import {computed, effect, Injectable, Signal, signal, WritableSignal} from '@angular/core';
import {environment} from "src/environments/environment";
import {AppStateService} from "src/app/services/app-state/app-state.service";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs";
import {CurrentUser} from "src/app/interfaces/current-user";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   api: string = `${environment.apiUrl}/auth`;
   current_user: WritableSignal<CurrentUser|null> = signal(null);
   authenticated: Signal<boolean> = computed(()=> !!this.current_user());
  constructor(private appState: AppStateService,
              private http: HttpClient,
              private router: Router) {
    this.appState.registerState('auth_current_user',this.current_user,false);
    effect(() => this.appState.storeKey('auth_current_user',this.current_user));
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
  logout(){
    this.http.get(`${this.api}/logout`,{observe: 'response'}).subscribe();
    //localStorage.clear();
    //this.router.navigate(['/login']);
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
      case 'accountant': return '/accounting';
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
