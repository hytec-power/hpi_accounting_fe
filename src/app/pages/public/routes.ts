import { Route } from "@angular/router";
import { IndexComponent } from "src/app/pages/public/index/index.component";

export const PublicRoutes: Route[] = [
    {
        path: '',
        component: IndexComponent
    }
];