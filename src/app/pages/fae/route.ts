import {Route} from "@angular/router";
import { POIndexComponent } from "src/app/pages/fae/purchase-orders/index/index.component";
import { CreateComponent as CreatePR} from "src/app/pages/fae/purchase-orders/create/create.component";


export const FaeRoutes: Route[] = [
  {
    path: 'purchase-orders',
    component: POIndexComponent,
    title: 'Purchase Orders',
  }, {
    path: 'purchase-orders/create',
    component: CreatePR,
    title: 'Create PR',
  }


];
