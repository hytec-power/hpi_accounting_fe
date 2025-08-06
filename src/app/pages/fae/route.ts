import {Route} from "@angular/router";
import { POIndexComponent } from "src/app/pages/fae/purchase-orders/index/index.component";


export const FaeRoutes: Route[] = [
  {
    path: 'purchase-orders',
    component: POIndexComponent
  }
];
