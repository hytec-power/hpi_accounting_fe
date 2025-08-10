import { Component } from '@angular/core';
import {ClientComponent} from "src/app/shared/purchase-request/view/client/client.component";
import {FaeComponent} from "src/app/shared/purchase-request/view/fae/fae.component";
import {ProjectDetailsComponent} from "src/app/shared/purchase-request/view/project-details/project-details.component";
import {ItemsComponent} from "src/app/shared/purchase-request/view/items/items.component";

@Component({
  selector: 'pr-view',
  imports: [
    ClientComponent,
    FaeComponent,
    ProjectDetailsComponent,
    ItemsComponent
  ],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewPrComponent {

}
