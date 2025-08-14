import {Component, input, output} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {ButtonComponent} from "src/app/common/button/button.component";

@Component({
  selector: 'pr-principal-details',
  imports: [
    ButtonComponent
  ],
  templateUrl: './principal-details.component.html',
  styleUrl: './principal-details.component.scss'
})
export class PrincipalDetailsComponent {
  next = output<void>();
  back = output<void>();
  form = input<FormGroup>();
}
