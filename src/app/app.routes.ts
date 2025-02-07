import { Routes } from '@angular/router';
import { AccountingTemplateComponent } from "src/app/pages/accounting/common/template/template.component";
import { EmployeeTemplateComponent } from "src/app/pages/employee/common/template/template.component";

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/public/public.module').then(m=> m.PublicModule)
    },
    {
        path: 'accounting',
        loadChildren: () => import('./pages/accounting/accounting.module').then(m=>m.AccountingModule),
        component: AccountingTemplateComponent
    },{
        path: 'employee',
        loadChildren: () => import('./pages/employee/employee.module').then(m=> m.EmployeeModule),
        component: EmployeeTemplateComponent
    }

];
