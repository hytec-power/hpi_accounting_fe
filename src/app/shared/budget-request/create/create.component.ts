import {Component, input, signal, WritableSignal} from '@angular/core';
import {StepperComponent, StepperItem} from "src/app/common/stepper/stepper.component";
import {ButtonComponent} from "src/app/common/button/button.component";
import {RequestDetailsComponent} from "src/app/shared/budget-request/create/request-details/request-details.component";
import {DateTimeComponent} from "src/app/shared/budget-request/create/date-time/date-time.component";
import { ChargingDetailsComponent } from './charging-details/charging-details.component';
import { AttachmentsComponent } from './attachments/attachments.component';
import {RequestBudgetComponent} from "src/app/shared/budget-request/create/request-budget/request-budget.component";
import { RequestManpowerComponent } from "./request-manpower/request-manpower.component";
import { RequestReviewComponent } from "./request-review/request-review.component";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'create-budget-request',
  imports: [
    StepperComponent,
    ButtonComponent,
    RequestDetailsComponent,
    DateTimeComponent,
    ChargingDetailsComponent,
    AttachmentsComponent,
    DateTimeComponent,
    RequestBudgetComponent,
    RequestManpowerComponent,
    RequestReviewComponent
],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  item = input();
  steps: StepperItem[]=[];
  page:WritableSignal<number> = signal(2);
  //FORMS & DATA
  form_request_details!: FormGroup;
  purpose: string[] = [];
  form_date_time!: FormGroup;
  form_project_details!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.initSteps();
    this.initForms();
  }
  initSteps(){
    this.steps = [
      {name: 'Request', bi_icon: 'bi-card-checklist'},
      {name: 'Date & Time', bi_icon: 'bi-calendar3'},
      {name: 'Charging Details', bi_icon: 'bi-clipboard'},
      {name: 'Budget', bi_icon: 'bi-cash'},
      {name: 'Manpower', bi_icon: 'bi-people'},
      {name: 'Attachments', bi_icon: 'bi-link-45deg'},
      {name: 'Review', bi_icon: 'bi-check-all'},
    ];
  }
  initForms(){
    this.initRequestDetails();
    this.initDateTime();
    this.initProjectDetails();
  }
  initRequestDetails(){
    this.form_request_details = this.fb.group({
        type: ['',Validators.required]
    });
  }
  initDateTime(){
    this.form_date_time = this.fb.group({
      date_needed: ['',Validators.required],
      time_needed: ['',Validators.required],
      expected_utilization: ['',Validators.required]
    })
  }
  initProjectDetails(){
    this.form_project_details = this.fb.group({
      project_name: ['',Validators.required],
      project_client: ['',Validators.required],
      project_address: ['',Validators.required],
      quotation_reference: ['',Validators.required],
      po_number: ['',Validators.required],
      po_amount: ['',Validators.required],
      future_project: [false,Validators.required],
      confidence_level: ['',Validators.required],
      expected_release_quarter: ['',Validators.required],
      expected_release_year: ['',Validators.required],
    });
  }
  next(){
    this.page.update(el=> el <6 ? el +1 :el);
  }
  back(){
    this.page.update(p=> p > 0 ? p-1:0);
  }
}
