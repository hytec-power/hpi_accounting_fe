import { Routes } from '@angular/router';
import { AccountingTemplateComponent } from "src/app/pages/accounting/common/template/template.component";
import { EmployeeTemplateComponent } from "src/app/pages/employee/common/template/template.component";
import {authGuard} from "src/app/guards/auth/auth.guard";
import {roleGuard} from "src/app/guards/role/role.guard";
import {sessionGuard} from "src/app/guards/session/session.guard";

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
        component: EmployeeTemplateComponent,
        canActivate: [ authGuard, sessionGuard , roleGuard ],
        data: { roles: ['employee'] },
    }

];
