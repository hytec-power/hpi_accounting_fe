import { Component } from '@angular/core';
import {PageTitleComponent} from "src/app/common/page-title/page-title.component";
import {StepperComponent, StepperItem} from "src/app/common/stepper/stepper.component";
import {UserDetailsComponent} from "src/app/pages/accounting/budget-requests/view/user-details/user-details.component";
import {ObjectivesComponent} from "src/app/pages/accounting/budget-requests/view/objectives/objectives.component";
import {RequestDateComponent} from "src/app/pages/accounting/budget-requests/view/request-date/request-date.component";
import {RequestTypeComponent} from "src/app/pages/accounting/budget-requests/view/request-type/request-type.component";
import {
  RequestPurposeComponent
} from "src/app/pages/accounting/budget-requests/view/request-purpose/request-purpose.component";
import {
  RequestAmountComponent
} from "src/app/pages/accounting/budget-requests/view/request-amount/request-amount.component";

@Component({
  selector: 'view-request',
  standalone: true,
  imports: [
    PageTitleComponent,
    StepperComponent,
    UserDetailsComponent,
    ObjectivesComponent,
    RequestDateComponent,
    RequestTypeComponent,
    RequestPurposeComponent,
    RequestAmountComponent
  ],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewComponent {
  steps: StepperItem[]=[];
  constructor() {
    this.initSteps();
  }
  initSteps(){
    this.steps.push(...[
      {name: 'Request Form'},
      {name: 'Requirements Checking'},
      {name: 'Documents Validation'},
      {name: 'Approval'},
      {name: 'Receipt'},
      {name: 'Confirmation'},
    ])
  }
}
