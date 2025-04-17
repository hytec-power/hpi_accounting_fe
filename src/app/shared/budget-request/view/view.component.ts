import {Component, input} from '@angular/core';
import {StepperComponent, StepperItem} from "src/app/common/stepper/stepper.component";
import { RequestPurposeComponent } from "src/app/shared/budget-request/view/request-purpose/request-purpose.component";
import {RequestDateComponent} from "src/app/shared/budget-request/view/request-date/request-date.component";
import { ChargingdetailsComponent } from "./chargingdetails/chargingdetails.component";
import { BudgetComponent } from "./budget/budget.component";
import { AttachmentComponent } from "./attachment/attachment.component";
import {RequestManpowerComponent} from './request-manpower/request-manpower.component'
import {BudgetRequest} from "src/app/interfaces/budget-request";
import {BudgetRequestService} from "src/app/services/employee/budget-reqeust/budget-request.service";
import {ActivatedRoute} from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'budget-request-viewer',
  imports: [
    StepperComponent,
    RequestDateComponent,
    RequestPurposeComponent,
    ChargingdetailsComponent,
    BudgetComponent,
    AttachmentComponent,
    RequestManpowerComponent,
  ],
    templateUrl: './view.component.html',
    styleUrl: './view.component.scss'
})
export class BudgetRequestViewComponent {
  //UI
  steps: StepperItem[]=[];
  date_form!: FormGroup;
  //DATA
  record= input.required<BudgetRequest>() ;
  constructor(private fb: FormBuilder,
              private brApi: BudgetRequestService,
              private ar: ActivatedRoute) {
    this.initSteps();
  }
  ngOnInit() {
    console.log(this.record());
    this.initForms();
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
  initForms(){
    this.initDateform();
  }
  initDateform(){
    this.date_form = this.fb.group({
      view_date: [this.record().date_needed,Validators.required],
      view_time: [this.record().time_needed,Validators.required],
      view_util: [this.record().date_utilization,Validators.required]
    })
  }
  
}
