import {Component, input, output} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'pr-items',
  imports: [],
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss'
})
export class ItemsComponent {
  next = output<void>();
  back = output<void>();
  form = input<FormGroup>();
}
