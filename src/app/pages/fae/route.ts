import {Route} from "@angular/router";
import { POIndexComponent } from "src/app/pages/fae/purchase-orders/index/index.component";
import { IndexComponent  as PrIndex} from "src/app/pages/fae/purchase-requests/index/index.component";
import {CreateComponent as CreatePR} from "src/app/pages/fae/purchase-requests/create/create.component";
import { ViewComponent as ViewPR } from "src/app/pages/fae/purchase-requests/view/view.component";


export const FaeRoutes: Route[] = [
  {
    path: 'purchase-request',
    component: PrIndex,
    title: 'Purchase Requests',
  },{
    path: 'purchase-request/create',
    component: CreatePR,
    title: 'Create PR',
  },{
    path: 'purchase-request/view',
    component: ViewPR,
    title: 'View PR',
  },
  {
    path: 'purchase-orders',
    component: POIndexComponent,
    title: 'Purchase Orders',
  }
];
