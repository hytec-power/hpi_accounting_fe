import {Component, input, model} from '@angular/core';
import {BudgetRequest} from "src/app/interfaces/budget-request";
import {CommonModule, JsonPipe} from "@angular/common";
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from "../../../../common/button/button.component";

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
  constructor() {
    this.initForm();
  }
  initForm(){

  }
  ngOnInit() {
      this.loadData();
  }
  loadData(){
      this.type = this.data().type;
      this.purpose = this.data().purpose;
  }
  toggleEdit(){
      this.isEditable = !this.isEditable;
  }
}