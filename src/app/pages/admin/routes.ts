import {Route} from "@angular/router";
import {IndexComponent as UsersIndex } from "src/app/pages/admin/users/index/index.component";
import {DashboardComponent } from "src/app/pages/admin/dashboard/dashboard.component";

export const adminRoutes: Route[] = [
  { path: '',
    component: DashboardComponent
  },{
    path: 'users',
    component: UsersIndex
  }
];
