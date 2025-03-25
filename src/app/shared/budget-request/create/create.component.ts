import {Component, input, signal, WritableSignal} from '@angular/core';
import {StepperComponent, StepperItem} from "../../../common/stepper/stepper.component";
import {ButtonComponent} from "../../../common/button/button.component";
import {DateLocationComponent} from "../editor/date-location/date-location.component";
import {RequestAttachmentsComponent} from "../editor/request-attachments/request-attachments.component";
import {RequestObjectivesComponent} from "../editor/request-objectives/request-objectives.component";
import {RequestParticularsComponent} from "../editor/request-particulars/request-particulars.component";
import {RequesterDetailsComponent} from "../editor/requester-details/requester-details.component";
import {RequestDetailsComponent} from "src/app/shared/budget-request/create/request-details/request-details.component";
import {DateTimeComponent} from "src/app/shared/budget-request/create/date-time/date-time.component";
import { ChargingDetailsComponent } from './charging-details/charging-details.component';
import { AttachmentsComponent } from './attachments/attachments.component';


@Component({
  selector: 'create-budget-request',
  imports: [
    StepperComponent,
    ButtonComponent,
    DateLocationComponent,
    RequestAttachmentsComponent,
    RequestObjectivesComponent,
    RequestParticularsComponent,
    RequesterDetailsComponent,
    RequestDetailsComponent,
    DateTimeComponent,
    ChargingDetailsComponent,
    AttachmentsComponent
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  item = input();
  steps: StepperItem[]=[];
  page:WritableSignal<number> = signal(5);
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
    this.page.update(el=> el+1);
  }
  back(){
    this.page.update(p=> p > 0 ? p-1:0);
  }
}
