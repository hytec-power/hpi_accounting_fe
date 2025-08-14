import {Component, input, model} from '@angular/core';
import {BudgetRequest} from "src/app/interfaces/budget-request";
import {CommonModule, JsonPipe} from "@angular/common";
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from "src/app/common/button/button.component";
import { BudgetRequestService as EmployeeBrApi } from "src/app/services/employee/budget-reqeust/budget-request.service";
import { BudgetRequestService as AccountingBrApi } from "src/app/services/accounting/budget-request/budget-request.service";
import {ServiceRoleSelector} from "src/app/services/common/serviceRoleSelector/service-role-selector.service";
import {AuthService} from "src/app/services/auth/auth.service";
import * as lodash from "lodash";
import {LoaderSpinnerComponent} from "src/app/common/loader-spinner/loader-spinner.component";
import {ToastService} from "src/app/services/common/toast/toast.service";

@Component({
    selector: 'request-purpose',
  imports: [
    FormsModule,
    CommonModule,
    ButtonComponent,
    ReactiveFormsModule,
    LoaderSpinnerComponent
  ],
    templateUrl: './request-purpose.component.html',
    styleUrl: './request-purpose.component.scss'
})
export class RequestPurposeComponent {
  //UI
  loading: boolean = false;
  isEditable: boolean = false;
  //DATA
  data = model.required<BudgetRequest>();
  type!: string;
  purpose: string[]=[];
  request_purpose: string[]=['Client Visit',
                             'Client Meeting',
                             'Sdp Presentation',
                             'Proposal Discussion',
                             'Optimization Survey',
                             'Client Prospecting',
                             'Faculty Immersion',
                             'Ocular Visit',
                             'Delivery Location',
                             'Repair',
                             'Bidding',
                             'Commissioning And Installation ASI',
                             'Event Exhibit Convention'];
  request_types: string[] = [ 'Bidding Documents', 'Training / Event / Exhibition', 'After Sales Training', 'TCP', 'Sponsorship'];
  //
  api!: EmployeeBrApi | AccountingBrApi;

  constructor(private serviceSelector: ServiceRoleSelector,
              private employeeBr: EmployeeBrApi,
              private accountingBr: AccountingBrApi,
              private auth: AuthService,
              private toast: ToastService) {
    this.initForm();
    this.initService();
  }
  initForm(){
    this.request_purpose.sort()
  }
  initService(){
    this.api = this.serviceSelector.select([this.employeeBr,this.accountingBr],this.auth.getCurrentRole()!);
  }
  ngOnInit() {
      this.loadData();
  }
  loadData(){
      this.type = lodash.cloneDeep(this.data().type);
      this.purpose = lodash.cloneDeep(this.data().purpose);
      this.purpose.sort();

  }
  apiUpdate(payload: any){
    this.loading = true;
    this.api.update(this.data().uuid,payload).subscribe({
        error: err => this.onError(),
        complete: () => this.onSuccess()
    });
  }
  toggleEdit(){
      this.isEditable = !this.isEditable;
  }
  onSelect(name: string,event:any){
      const checked = event.target.checked;
      checked ? this.addPurpose(name): this.removePurpose(name);
  }
  addPurpose(name: string){
    !this.purpose.includes(name) && this.purpose.push(name);
    this.purpose.sort();
  }
  removePurpose(name: string){
    this.purpose.includes(name) && this.purpose.splice(this.purpose.indexOf(name),1);
    this.purpose.sort();
  }
  isValid(){
    return !!this.type && this.purpose.length > 0;
  }
  onCancel(){
    this.isEditable = false;
    this.loadData();
  }
  onSave(){
    if(!this.isValid()){
      return;
    }
    const payload = {
      type: this.type,
      purpose: this.purpose
    };
    this.apiUpdate(payload);
  }
  onSuccess(){
    this.data.update(d=> ({...d,type:this.type,purpose:this.purpose}));
    this.toast.makeToast('success','Request Details updated successfully!',5000);
    this.isEditable = false;
    this.loading = false;
  }
  onError(){
    this.loading = false;
    this.toast.makeToast('error','Error Updating Record',5000);
  }
}
