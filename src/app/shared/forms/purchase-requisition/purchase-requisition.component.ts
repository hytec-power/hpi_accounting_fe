import {Component, signal, WritableSignal} from '@angular/core';
import {StepperComponent, StepperItem} from "src/app/common/stepper/stepper.component";
import {
  RequestDetailsComponent
} from "src/app/shared/forms/purchase-requisition/request-details/request-details.component";

@Component({
  selector: 'purchase-requisition-form',
  imports: [
    StepperComponent,
    RequestDetailsComponent
  ],
  templateUrl: './purchase-requisition.component.html',
  styleUrl: './purchase-requisition.component.scss'
})
export class PurchaseRequisitionComponent {
  steps: StepperItem[]=[];
  page: WritableSignal<number> = signal(0);
  constructor() {
    this.initSteps();
  }
  initSteps(){
    this.steps.push(
        {name: 'Request Details', bi_icon: 'bi-list-task'},
        {name: 'Client Details', bi_icon: 'bi-people'},
        {name: 'Principal Details', bi_icon: 'bi-person-vcard'},
        {name: 'Attachments', bi_icon: 'bi-paperclip'},
        {name: 'Items', bi_icon: 'bi-box-seam'},
        {name: 'Summary', bi_icon: 'bi-list-check'},

    );
  }
}
