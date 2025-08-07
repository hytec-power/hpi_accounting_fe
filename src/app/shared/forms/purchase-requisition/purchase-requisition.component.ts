import { Component } from '@angular/core';
import {StepperComponent, StepperItem} from "src/app/common/stepper/stepper.component";

@Component({
  selector: 'purchase-requisition-form',
  imports: [
    StepperComponent
  ],
  templateUrl: './purchase-requisition.component.html',
  styleUrl: './purchase-requisition.component.scss'
})
export class PurchaseRequisitionComponent {
  steps: StepperItem[]=[];
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
