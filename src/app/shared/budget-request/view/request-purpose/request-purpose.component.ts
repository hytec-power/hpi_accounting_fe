import {Component, input, model} from '@angular/core';
import {BudgetRequest} from "src/app/interfaces/budget-request";
import {CommonModule, JsonPipe} from "@angular/common";
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from "src/app/common/button/button.component";
import { BudgetRequestService as EmployeeBrApi } from "src/app/services/employee/budget-reqeust/budget-request.service";
import { BudgetRequestService as AccountingBrApi } from "src/app/services/accounting/budget-request/budget-request.service";
import {ServiceRoleSelector} from "src/app/services/common/serviceRoleSelector/service-role-selector.service";
import {AuthService} from "src/app/services/auth/auth.service";

@Component({
    selector: 'request-purpose',
  imports: [
      FormsModule,
      CommonModule,
      ButtonComponent,
      ReactiveFormsModule
    ],
    templateUrl: './request-purpose.component.html',
    styleUrl: './request-purpose.component.scss'
})
export class RequestPurposeComponent {
  api!: EmployeeBrApi | AccountingBrApi;
  data = model.required<BudgetRequest>();
  isEditable: boolean = false;
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
  constructor(private serviceSelector: ServiceRoleSelector,
              private employeeBr: EmployeeBrApi,
              private accountingBr: AccountingBrApi,
              private auth: AuthService) {
    this.initForm();
    this.initService();
  }
  initForm(){

  }
  initService(){
    this.api = this.serviceSelector.select([EmployeeBrApi,AccountingBrApi],this.auth.getCurrentRole()!);
  }
  ngOnInit() {
      this.loadData();
  }
  loadData(){
      this.type = this.data().type;
      this.purpose = this.data().purpose;
      this.purpose.sort();
      this.request_purpose.sort()
  }
  apiUpdate(){

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
}
