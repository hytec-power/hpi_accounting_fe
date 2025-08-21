import {ChangeDetectorRef, Component, output, signal, WritableSignal} from '@angular/core';
import {StepperComponent, StepperItem} from "src/app/common/stepper/stepper.component";
import {
  RequestDetailsComponent
} from "src/app/shared/forms/purchase-requisition/request-details/request-details.component";
import {
  ClientDetailsComponent
} from "src/app/shared/forms/purchase-requisition/client-details/client-details.component";
import {
  PrincipalDetailsComponent
} from "src/app/shared/forms/purchase-requisition/principal-details/principal-details.component";
import {AttachmentsComponent} from "src/app/shared/forms/purchase-requisition/attachments/attachments.component";
import {ItemsComponent} from "src/app/shared/forms/purchase-requisition/items/items.component";
import {CompleteComponent} from "src/app/shared/forms/purchase-requisition/complete/complete.component";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'purchase-requisition-form',
  imports: [
    StepperComponent,
    RequestDetailsComponent,
    ClientDetailsComponent,
    PrincipalDetailsComponent,
    AttachmentsComponent,
    ItemsComponent,
    CompleteComponent
  ],
  templateUrl: './purchase-requisition.component.html',
  styleUrl: './purchase-requisition.component.scss'
})
export class PurchaseRequisitionComponent {
  steps: StepperItem[]=[];
  page: WritableSignal<number> = signal(1);
  onComplete = output<void>();
  onCancel = output<void>();
  form_request_details: FormGroup | null = null;
  constructor(private cd: ChangeDetectorRef) {
    this.initSteps();
  }
  ngOnInit() {
    this.cd.detectChanges();
  }
  initSteps(){
    this.steps.push(
        {name: 'Request Details', bi_icon: 'bi-list-task'},
        {name: 'Client Details', bi_icon: 'bi-people'},
        {name: 'Principal Details', bi_icon: 'bi-person-vcard'},
        {name: 'Attachments', bi_icon: 'bi-paperclip'},
        {name: 'Items', bi_icon: 'bi-box-seam'},
        {name: 'Complete', bi_icon: 'bi-list-check'},

    );
  }
  next(){
    this.page() < this.steps.length && this.page.update(x=> x+1) ;
  }
  back(){
    this.page() > 0 && this.page.update(x=> x-1) ;
  }
  complete(){
    this.onComplete.emit();
  }
}
