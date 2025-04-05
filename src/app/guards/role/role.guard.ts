import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from "src/app/services/auth/auth.service";
import {inject} from "@angular/core";

export const roleGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const current_role = auth.getCurrentRole();
  if( route.data['roles'].includes(current_role)){
    return true;
  }
  return inject(Router).createUrlTree([auth.getRedirectUrl()]);
};
