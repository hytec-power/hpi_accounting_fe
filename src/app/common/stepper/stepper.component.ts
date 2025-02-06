import {Component, input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'stepper-component',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss'
})
export class StepperComponent {
  items = input<StepperItem[]>([]);
  current_index = input<number>(0);
}
export interface StepperItem{
  name: string,
}
