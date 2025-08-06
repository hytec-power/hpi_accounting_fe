import { Routes } from '@angular/router';
import { AccountingTemplateComponent } from "src/app/pages/accounting/common/template/template.component";
import { EmployeeTemplateComponent } from "src/app/pages/employee/common/template/template.component";
import { FaeTemplateComponent } from "src/app/pages/fae/common/template/template.component";
import {authGuard} from "src/app/guards/auth/auth.guard";
import {roleGuard} from "src/app/guards/role/role.guard";
import {sessionGuard} from "src/app/guards/session/session.guard";
import {FaeModule} from "src/app/pages/fae/fae.module";

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/public/public.module').then(m=> m.PublicModule)
    },
    {
        path: 'accounting',
        loadChildren: () => import('./pages/accounting/accounting.module').then(m=>m.AccountingModule),
        component: AccountingTemplateComponent,
        // canActivate: [ authGuard, sessionGuard , roleGuard ],
        data: { roles: ['accountant'] },
    },{
        path: 'employee',
        loadChildren: () => import('./pages/employee/employee.module').then(m=> m.EmployeeModule),
        component: EmployeeTemplateComponent,
        // canActivate: [ authGuard, sessionGuard , roleGuard ],
        data: { roles: ['employee'] },
    },{
      path: 'fae',
      loadChildren: () => import('./pages/fae/fae.module').then(m=>m.FaeModule),
      component: FaeTemplateComponent,
      data: { roles: ['fae'] },
  }
];
