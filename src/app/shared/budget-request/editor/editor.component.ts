import {Component, input, signal, WritableSignal} from '@angular/core';
import {StepperComponent, StepperItem} from "src/app/common/stepper/stepper.component";
import {
  RequesterDetailsComponent
} from "src/app/shared/budget-request/editor/requester-details/requester-details.component";
import {ButtonComponent} from "src/app/common/button/button.component";
import {
  RequestObjectivesComponent
} from "src/app/shared/budget-request/editor/request-objectives/request-objectives.component";
import {DateLocationComponent} from "src/app/shared/budget-request/editor/date-location/date-location.component";
import {
  RequestParticularsComponent
} from "src/app/shared/budget-request/editor/request-particulars/request-particulars.component";
import {
  RequestAttachmentsComponent
} from "src/app/shared/budget-request/editor/request-attachments/request-attachments.component";

@Component({
    selector: 'budget-request-editor',
    imports: [
        StepperComponent,
        RequesterDetailsComponent,
        RequestObjectivesComponent,
        ButtonComponent,
        DateLocationComponent,
        RequestParticularsComponent,
        RequestAttachmentsComponent
    ],
    templateUrl: './editor.component.html',
    styleUrl: './editor.component.scss'
})
export class EditorComponent {
  item = input();
  steps: StepperItem[]=[];
  page:WritableSignal<number> = signal(1);
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
