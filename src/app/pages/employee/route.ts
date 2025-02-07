import {Route} from "@angular/router";
import { DashboardComponent } from "src/app/pages/employee/dashboard/dashboard.component";
import { IndexComponent  as BudgetRequestIndex } from "src/app/pages/employee/budget-requests/index/index.component";
import { ViewComponent as BudgetRequestViewer  } from "src/app/pages/employee/budget-requests/view/view.component";


export const EmployeeRoutes: Route[]=[
    { path: '',
      component: DashboardComponent
    },{
        path: 'budget-requests',
        component: BudgetRequestIndex
    },{
        path: 'budget-requests/:id',
        component: BudgetRequestViewer
    }
];