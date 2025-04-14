import { Route } from "@angular/router";
import {DashboardComponent} from "src/app/pages/accounting/dashboard/dashboard.component";
import { ViewComponent as ViewBudgetRequest } from "src/app/pages/accounting/budget-requests/view/view.component";
import { IndexComponent as BudgetRequestIndex } from "src/app/pages/accounting/budget-requests/index/index.component";

export const AccountingRoutes: Route[]=[
    { path: '',
      component: DashboardComponent
    },{
        path: 'budget-requests',
        component: BudgetRequestIndex
    },{
        path: 'budget-requests/:uuid',
        component: ViewBudgetRequest
    },
];
