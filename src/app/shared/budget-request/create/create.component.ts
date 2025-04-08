import {ChangeDetectorRef, Component, input, signal, WritableSignal} from '@angular/core';
import {StepperComponent, StepperItem} from "src/app/common/stepper/stepper.component";
import {RequestDetailsComponent} from "src/app/shared/budget-request/create/request-details/request-details.component";
import {DateTimeComponent} from "src/app/shared/budget-request/create/date-time/date-time.component";
import { ChargingDetailsComponent } from './charging-details/charging-details.component';
import {RequestBudgetComponent} from "src/app/shared/budget-request/create/request-budget/request-budget.component";
import { RequestManpowerComponent } from "./request-manpower/request-manpower.component";
import { RequestReviewComponent } from "./request-review/request-review.component";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BudgetRequestService} from "src/app/services/employee/budget-reqeust/budget-request.service";
import {BudgetRequest} from "src/app/interfaces/budget-request";
import {AttachmentsComponent} from "src/app/shared/budget-request/create/attachments/attachments.component";

@Component({
  selector: 'create-budget-request',
  imports: [
    StepperComponent,
    RequestDetailsComponent,
    DateTimeComponent,
    ChargingDetailsComponent,
    DateTimeComponent,
    RequestBudgetComponent,
    RequestManpowerComponent,
    RequestReviewComponent,
    AttachmentsComponent,
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  item = input();
  steps: StepperItem[]=[];
  page:WritableSignal<number> = signal(5);
  //FORMS & DATA
  form_request_details!: FormGroup;
  purpose: string[] = [];
  form_date_time!: FormGroup;
  form_project_details!: FormGroup;
  form_request_allocation!: FormGroup;
  form_release_details!:FormGroup;
  preview: BudgetRequest|null = null;

  constructor(private fb: FormBuilder,
              private cd: ChangeDetectorRef,
              private br: BudgetRequestService) {
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
    this.initAllocation();
    this.initReleaseForm();
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
      confidence_level: [''],
      expected_release_quarter: [''],
      expected_release_year: [''],
    });

    this.form_project_details.get('future_project')?.valueChanges
        .subscribe((checked) => {
            const controls = ['confidence_level','expected_release_quarter','expected_release_year'];
            controls.forEach(control => this.form_project_details.get(control)?.clearValidators());
            controls.forEach(control => this.form_project_details.get(control)?.setValue(''));
            checked && controls.forEach(control => this.form_project_details.get(control)?.setValidators([Validators.required]));
            this.form_project_details.updateValueAndValidity();
            this.cd.detectChanges();
        });

  }
  initAllocation(){
      this.form_request_allocation = this.fb.group({
        particulars: this.fb.array([]),
        others: this.fb.array([]),
      });
  }
  initReleaseForm(){
    this.form_release_details = this.fb.group({
        release_type: ['cash',Validators.required],
        release_bank: [''],
        release_account_name: [''],
        release_account_number: [''],
    });
    const controls = ['release_bank','release_account_name','release_account_number']
    this.form_release_details
        .get('release_type')?.valueChanges
        .subscribe((value) => {
            controls.forEach(name => this.form_release_details.get(name)?.clearValidators());
            controls.forEach(name => this.form_release_details.get(name)?.setValue(''));
            if(value!='cash'){
                controls.forEach(name => this.form_release_details.get(name)?.setValidators([Validators.required]));
            }
            controls.forEach(name => this.form_release_details.get(name)?.updateValueAndValidity());
            this.cd.detectChanges();
    });


  }
  apiCreate(payload: any){
    this.br.create(payload);
  }
  next(){
    this.page.update(el=> el <6 ? el +1 :el);
  }
  back(){
    this.page.update(p=> p > 0 ? p-1:0);
  }
  showPreview(){
    this.preview = {
      ...this.form_release_details.getRawValue(),
      ...this.form_date_time.getRawValue(),
      ...this.form_project_details.getRawValue(),
      ...this.form_request_allocation.getRawValue(),
      ...this.form_release_details.getRawValue(),
      purpose: this.purpose
    };
    this.next()
  }
  submit(){
    const payload = {
      ...this.form_release_details.getRawValue(),
      ...this.form_date_time.getRawValue(),
      ...this.form_project_details.getRawValue(),
      ...this.form_request_allocation.getRawValue(),
      ...this.form_release_details.getRawValue(),
      purpose: this.purpose
    };
    this.apiCreate(payload);
  }

}
