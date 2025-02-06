import { Component } from '@angular/core';
import {PageTitleComponent} from "src/app/common/page-title/page-title.component";
import {StepperComponent, StepperItem} from "src/app/common/stepper/stepper.component";
import {
  RequestUserDetailsComponent
} from "src/app/pages/accounting/budget-requests/view/request-user-details/request-user-details.component";

@Component({
  selector: 'view-request',
  standalone: true,
  imports: [
    PageTitleComponent,
    StepperComponent,
    RequestUserDetailsComponent
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
