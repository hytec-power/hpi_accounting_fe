import { Route } from "@angular/router";
import { IndexComponent } from "src/app/pages/public/index/index.component";
import { AuthComponent } from "src/app/pages/public/auth/auth.component";

export const PublicRoutes: Route[] = [
    {
        path: '',
        component: IndexComponent
    },{
    path: 'login',
    component: AuthComponent
  }
];
