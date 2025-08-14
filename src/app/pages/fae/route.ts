import {Route} from "@angular/router";
import { POIndexComponent } from "src/app/pages/fae/purchase-orders/index/index.component";
import { IndexComponent  as PrIndex} from "src/app/pages/fae/purchase-requests/index/index.component";
import {CreateComponent as CreatePR} from "src/app/pages/fae/purchase-requests/create/create.component";
import { ViewComponent as ViewPR } from "src/app/pages/fae/purchase-requests/view/view.component";


export const FaeRoutes: Route[] = [
  {
    path: 'purchase-orders/pr',
    component: PrIndex,
    title: 'Purchase Requests',
  },{
    path: 'purchase-orders/pr/create',
    component: CreatePR,
    title: 'Create PR',
  },{
    path: 'purchase-orders/pr/:uuid',
    component: ViewPR,
    title: 'View PR',
  }
  ,{
    path: 'purchase-orders/po',
    component: POIndexComponent,
    title: 'Purchase Orders',
  }
];
