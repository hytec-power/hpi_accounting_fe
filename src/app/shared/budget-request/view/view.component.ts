import {Component, input, model} from '@angular/core';
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
import { CurrencyPipe } from '@angular/common';
import { HpiUser } from 'src/app/interfaces/hpi-user';

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
    providers: [CurrencyPipe],
    templateUrl: './view.component.html',
    styleUrl: './view.component.scss'
})
export class BudgetRequestViewComponent {
  //UI
  steps: StepperItem[]=[];
  //DATA
  purpose_form!: FormGroup;
  date_form!: FormGroup;
  charging_form!: FormGroup;
  record= input.required<BudgetRequest>() ;
  manpower_list= input.required<HpiUser[]>() ;
  constructor(private currencyPipe: CurrencyPipe,
              private fb: FormBuilder,
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
    this.initPurposeform();
    this.initChargingform();
  }
  initDateform(){
    this.date_form = this.fb.group({
      view_date: [this.record().date_needed,Validators.required],
      view_time: [this.record().time_needed,Validators.required],
      view_util: [this.record().date_utilization,Validators.required]
    })
  }
  initPurposeform(){
    this.purpose_form = this.fb.group({
      view_type: [this.record().type,Validators.required],
      view_purpose: [this.record().purpose, Validators.required]
    })
  }
  initChargingform(){
    this.charging_form = this.fb.group({
      project_name: [this.record().project_name,Validators.required],
      quotation_ref: [this.record().quotation_reference,Validators.required],
      po_ref: [this.record().po_reference,Validators.required],
      po_amount: [this.currencyPipe.transform(this.record().po_amount, 'PHP'),Validators.required],
      confidence_level: [this.record().confidence_level,Validators.required],
      expected_qy: [`${this.record().expected_quarter} / ${this.record().expected_year}`,Validators.required],
      future_project: [this.record().future_project]
    })
  }
  
}
