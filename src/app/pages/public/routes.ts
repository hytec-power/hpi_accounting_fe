import { Route } from "@angular/router";
import { IndexComponent } from "src/app/pages/public/index/index.component";
import { AuthComponent } from "src/app/pages/public/auth/auth.component";
import { OauthComponent } from "src/app/pages/public/oauth/oauth.component";

export const PublicRoutes: Route[] = [
    {
        path: '',
        component: IndexComponent
    },{
    path: 'login',
    component: AuthComponent
    },{
    path: 'oauth',
    component: OauthComponent
    }
];
