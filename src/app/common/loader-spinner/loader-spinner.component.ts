import {Component, input} from '@angular/core';

@Component({
  selector: 'loader-spinner',
  imports: [],
  templateUrl: './loader-spinner.component.html',
  styleUrl: './loader-spinner.component.scss'
})
export class LoaderSpinnerComponent {
  size_px = input<number>(40);
}
