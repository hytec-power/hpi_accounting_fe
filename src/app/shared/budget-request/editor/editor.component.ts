import {Component, input} from '@angular/core';
import {StepperComponent, StepperItem} from "src/app/common/stepper/stepper.component";

@Component({
  selector: 'budget-request-editor',
  standalone: true,
  imports: [
    StepperComponent
  ],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss'
})
export class EditorComponent {
  item = input();
  steps: StepperItem[]=[];
  constructor() {
    this.initSteps();
  }
  initSteps(){
    this.steps = [
      {name: 'Requester Details'},
      {name: 'Objectives'},
      {name: 'Date'},
      {name: 'Location'},
      {name: 'Particulars'},
      {name: 'Location'},
      {name: 'Documents / Attachments'},
      {name: 'Review'},
    ];
  }
}
