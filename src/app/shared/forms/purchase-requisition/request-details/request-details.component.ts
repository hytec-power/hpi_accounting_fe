import {Component, input, output} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {ButtonComponent} from "src/app/common/button/button.component";

@Component({
  selector: 'pr-request-details',
  imports: [
    ButtonComponent
  ],
  templateUrl: './request-details.component.html',
  styleUrl: './request-details.component.scss'
})
export class RequestDetailsComponent {
  next = output<void>();
  back = output<void>();
  form = input<FormGroup>();
}
