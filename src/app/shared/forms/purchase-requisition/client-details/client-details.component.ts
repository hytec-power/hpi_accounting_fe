import {Component, input, output} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'pr-client-details',
  imports: [],
  templateUrl: './client-details.component.html',
  styleUrl: './client-details.component.scss'
})
export class ClientDetailsComponent {
  next = output<void>();
  back = output<void>();
  form = input<FormGroup>();
}
