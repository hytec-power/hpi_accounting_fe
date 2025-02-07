import {Route} from "@angular/router";
import { DashboardComponent } from "src/app/pages/employee/dashboard/dashboard.component";
import { IndexComponent  as BudgetRequestIndex } from "src/app/pages/employee/budget-requests/index/index.component";

export const EmployeeRoutes: Route[]=[
    { path: '',
      component: DashboardComponent
    },{
        path: 'budget-requests',
        component: BudgetRequestIndex
    }
];