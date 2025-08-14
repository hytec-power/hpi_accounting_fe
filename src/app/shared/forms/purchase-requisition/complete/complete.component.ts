import {Component, output} from '@angular/core';

@Component({
  selector: 'pr-complete',
  imports: [],
  templateUrl: './complete.component.html',
  styleUrl: './complete.component.scss'
})
export class CompleteComponent {
  onComplete = output<void>();
}
