import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/public/public.module').then(m=> m.PublicModule)
    },
    {
        path: 'accounting',
        loadChildren: () => import('./pages/accounting/accounting.module').then(m=>m.AccountingModule)

    }
];
