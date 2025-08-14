import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "src/app/services/auth/auth.service";

export const authGuard: CanActivateFn = (route, state) => {
  return inject(AuthService).isAuthenticated() ? true : inject(Router).createUrlTree(['/login'])
};
