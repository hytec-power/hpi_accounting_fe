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
  page:WritableSignal<number> = signal(4);
  constructor() {
    this.initSteps();
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
  next(){
    this.page.update(el=> el <6 ? el +1 :el);
  }
  back(){
    this.page.update(p=> p > 0 ? p-1:0);
  }
}
