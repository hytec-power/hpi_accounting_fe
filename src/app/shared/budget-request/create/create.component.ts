import {ChangeDetectorRef, Component, input, output, signal, WritableSignal} from '@angular/core';
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
import {LoaderBouncingBallsComponent} from "src/app/common/loader-bouncing-balls/loader-bouncing-balls.component";
import {ModalsService} from "src/app/services/common/modals/modals.service";
import {DatePipe} from "@angular/common";

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
    LoaderBouncingBallsComponent,
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  //INPUT
  item = input();
  //OUTPUT
  onCreate = output<void>()
  //UI
  steps: StepperItem[]=[];
  page:WritableSignal<number> = signal(0);
  loading: boolean = false;
  //FORMS & DATA
  form_request_details!: FormGroup;
  purpose: string[] = [];
  form_date_time!: FormGroup;
  form_project_details!: FormGroup;
  form_request_allocation!: FormGroup;
  form_release_details!:FormGroup;
  attachments: Uploads[]=[];
  budget_total: number = 0;
  preview: BudgetRequest|null = null;

  constructor(private fb: FormBuilder,
              private cd: ChangeDetectorRef,
              private brApi: BudgetRequestService,
              private modals: ModalsService) {
    this.initSteps();
    this.initForms();
  }
  ngOnInit() {

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
      date_utilization: ['',Validators.required]
    })
  }
  initProjectDetails(){
    this.form_project_details = this.fb.group({
      project_name:         ['',[Validators.required,Validators.maxLength(50)]],
      project_client:       ['',[Validators.required]],
      project_address:      ['',[Validators.required,Validators.maxLength(255)]],
      quotation_reference:  ['',[Validators.required,Validators.maxLength(50)]],
      po_reference:         ['',[Validators.required,Validators.maxLength(50)]],
      po_amount:            ['',[Validators.required,Validators.min(1),Validators.max(999999999999)]],
      future_project:       [false,[Validators.required]],
      confidence_level:     ['',[]],
      expected_quarter:     ['',[]],
      expected_year:        ['',[]],
    });

    this.form_project_details.get('future_project')?.valueChanges
        .subscribe((checked) => {
            const controls = ['confidence_level','expected_quarter','expected_year'];
            controls.forEach(control => this.form_project_details.get(control)?.clearValidators());
            controls.forEach(control => this.form_project_details.get(control)?.setValue(''));
            if(checked){
              this.form_project_details.get('confidence_level')?.setValidators([Validators.required,
                                                                                Validators.pattern('^\\d+$'),
                                                                                Validators.max(100),
                                                                                Validators.min(1)])
              this.form_project_details.get('expected_quarter')?.setValidators([Validators.required,
                                                                                Validators.pattern('^\\d+$'),
                                                                                Validators.max(4),
                                                                                Validators.min(1)])
              this.form_project_details.get('expected_year')?.setValidators([Validators.required,
                                                                             Validators.pattern('^\\d+$'),
                                                                             Validators.min(new Date().getFullYear()),
                                                                             Validators.max(2099)])
            }
            controls.forEach(control => this.form_project_details.get(control)?.updateValueAndValidity());
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
    this.loading = true;
    this.brApi.create(payload)
        .subscribe({
          next: res=> console.log(res),
          error: error=> this.loading = false,
          complete: () =>  this.onCreate.emit()
        });
  }
  next(){
    this.page.update(el=> el <6 ? el +1 :el);
  }
  back(){
    this.page.update(p=> p > 0 ? p-1:0);
  }
  showPreview(){
    this.preview = {
      uuid: '',
      ...this.form_request_details.getRawValue(),
      ...this.form_release_details.getRawValue(),
      ...this.form_date_time.getRawValue(),
      ...this.form_project_details.getRawValue(),
      ...this.form_release_details.getRawValue(),
      budget_allocation: this.form_request_allocation.getRawValue(),
      budget_total: this.budget_total,
      purpose: this.purpose,
      attachments: this.attachments,
    };
    this.next()
  }
  submit(){
    const payload = {
      ...this.form_request_details.getRawValue(),
      ...this.form_release_details.getRawValue(),
      ...this.form_date_time.getRawValue(),
      ...this.form_project_details.getRawValue(),
      ...this.form_release_details.getRawValue(),
      budget_allocation: this.form_request_allocation.getRawValue(),
      budget_total: this.budget_total,
      purpose: this.purpose,
      attachments: this.attachments,
    };
    this.modals.getInstance()?.showConfirm('Confirm Action','Create Budget Request?','Create','Cancel',()=>this.apiCreate(payload))
  }
  getRequestType(){
    return this.form_request_details.get('type')?.value ?? '';
  }

}
export interface Uploads{
  name: string
  uuid: string
}
