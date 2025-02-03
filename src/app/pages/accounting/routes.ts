import { Route } from "@angular/router";
import {DashboardComponent} from "src/app/pages/accounting/dashboard/dashboard.component";

export const AccountingRoutes: Route[]=[
    { path: '',
      component: DashboardComponent
    }
];