import { Route } from "@angular/router";
import {DashboardComponent} from "src/app/pages/accounting/dashboard/dashboard.component";
import { IndexComponent as BudgetRequestIndex } from "src/app/pages/accounting/budget-requests/index/index.component";

export const AccountingRoutes: Route[]=[
    { path: '',
      component: DashboardComponent
    },{
        path: 'budget-requests',
        component: BudgetRequestIndex
    }
];