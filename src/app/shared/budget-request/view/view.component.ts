import { Component } from '@angular/core';
import {StepperComponent, StepperItem} from "src/app/common/stepper/stepper.component";
import {UserDetailsComponent} from "src/app/shared/budget-request/view/user-details/user-details.component";
import { RequestPurposeComponent } from "src/app/shared/budget-request/view/request-purpose/request-purpose.component";
import {RequestTypeComponent} from "src/app/shared/budget-request/view/request-type/request-type.component";
import {RequestDateComponent} from "src/app/shared/budget-request/view/request-date/request-date.component";
import {RequestAmountComponent} from "src/app/shared/budget-request/view/request-amount/request-amount.component";
import {ObjectivesComponent} from "src/app/shared/budget-request/view/objectives/objectives.component";
import { RequestManpowerComponent } from './request-manpower/request-manpower.component';




@Component({
    selector: 'budget-request-viewer',
    imports: [
        StepperComponent,
        UserDetailsComponent,
        ObjectivesComponent,
        RequestAmountComponent,
        RequestDateComponent,
        RequestPurposeComponent,
        RequestTypeComponent,
        UserDetailsComponent,
        RequestManpowerComponent
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
