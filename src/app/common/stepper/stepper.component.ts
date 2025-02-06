import {Component, input} from '@angular/core';

@Component({
  selector: 'stepper-component',
  standalone: true,
  imports: [],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss'
})
export class StepperComponent {
  items = input<StepperItem[]>([]);
}
export interface StepperItem{
  name: string,
}
