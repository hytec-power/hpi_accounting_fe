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

@Component({
  selector: 'budget-request-editor',
  standalone: true,
  imports: [
    StepperComponent,
    RequesterDetailsComponent,
    RequestObjectivesComponent,
    ButtonComponent,
    DateLocationComponent
  ],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss'
})
export class EditorComponent {
  item = input();
  steps: StepperItem[]=[];
  page:WritableSignal<number> = signal(2);
  constructor() {
    this.initSteps();
  }
  initSteps(){
    this.steps = [
      {name: 'Requester Details'},
      {name: 'Objectives'},
      {name: 'Date & Location'},
      {name: 'Particulars'},
      {name: 'Documents / Attachments'},
      {name: 'Review'},
    ];
  }
  next(){
    this.page.update(el=> el+1);
  }
  back(){
    this.page.update(p=> p > 0 ? p-1:0);
  }
}
