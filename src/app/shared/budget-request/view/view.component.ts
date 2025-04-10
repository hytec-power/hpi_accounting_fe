import { Component } from '@angular/core';
import {StepperComponent, StepperItem} from "src/app/common/stepper/stepper.component";
import { RequestPurposeComponent } from "src/app/shared/budget-request/view/request-purpose/request-purpose.component";
import {RequestDateComponent} from "src/app/shared/budget-request/view/request-date/request-date.component";
import { ChargingdetailsComponent } from "./chargingdetails/chargingdetails.component";
import { BudgetComponent } from "./budget/budget.component";
import { AttachmentComponent } from "./attachment/attachment.component";




@Component({
    selector: 'budget-request-viewer',
    imports: [
    StepperComponent,
    RequestDateComponent,
    RequestPurposeComponent,
    ChargingdetailsComponent,
    BudgetComponent,
    AttachmentComponent
],
    templateUrl: './view.component.html',
    styleUrl: './view.component.scss'
})
export class BudgetRequestViewComponent {
  steps: StepperItem[]=[];
  constructor() {
    this.initSteps();
  }
  initSteps(){
    this.steps.push(...[
      {name: 'Request Form' , bi_icon: 'bi-card-checklist'},
      {name: 'Requirements Checking', bi_icon: 'bi-card-checklist'},
      {name: 'Documents Validation', bi_icon: 'bi-card-checklist'},
      {name: 'Approval', bi_icon: 'bi-card-checklist'},
      {name: 'Receipt', bi_icon: 'bi-card-checklist'},
      {name: 'Confirmation', bi_icon: 'bi-card-checklist'},
    ])
  }
}
