import { HttpInterceptorFn } from '@angular/common/http';
import {inject} from "@angular/core";
import {AuthService} from "src/app/services/auth/auth.service";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth: AuthService = inject(AuthService);
  return next(auth.isAuthenticated() ? req.clone({ headers: req.headers.set('Authorization', `Bearer ${auth.getAuthToken()}`) }) : req );
};
