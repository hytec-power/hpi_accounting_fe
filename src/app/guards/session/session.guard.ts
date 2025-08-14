import {CanActivateFn, UrlTree} from '@angular/router';
import {AuthService} from "src/app/services/auth/auth.service";
import {inject} from "@angular/core";


export const sessionGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  return new Promise<boolean| UrlTree >((resolve, reject)=>{
    authService.validateSession().subscribe({
      error: ()=> authService.logout(),
      complete: () => resolve(true)
    });
  });
};
