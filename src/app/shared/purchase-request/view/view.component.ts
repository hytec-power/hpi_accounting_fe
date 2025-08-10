import { Component } from '@angular/core';
import {ClientComponent} from "src/app/shared/purchase-request/view/client/client.component";
import {FaeComponent} from "src/app/shared/purchase-request/view/fae/fae.component";
import {ProjectDetailsComponent} from "src/app/shared/purchase-request/view/project-details/project-details.component";
import {ItemsComponent} from "src/app/shared/purchase-request/view/items/items.component";
import {StepperComponent, StepperItem} from "src/app/common/stepper/stepper.component";

@Component({
  selector: 'pr-view',
  imports: [
    ClientComponent,
    FaeComponent,
    ProjectDetailsComponent,
    ItemsComponent,
    StepperComponent
  ],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewPrComponent {
  steps: StepperItem[]=[];
  constructor() {
    this.initSteps();
  }
  initSteps(){
    this.steps.push({name: "FAE", bi_icon: "bi-check-circle-fill"});
    this.steps.push({name: "Intercom", bi_icon: "bi-check-circle-fill"});
    this.steps.push({name: "Accounting", bi_icon: "bi-check-circle-fill"});
  }
}
