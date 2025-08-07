import {Component, input, output} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {ButtonComponent} from "src/app/common/button/button.component";

@Component({
  selector: 'pr-items',
  imports: [
    ButtonComponent
  ],
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss'
})
export class ItemsComponent {
  next = output<void>();
  back = output<void>();
  form = input<FormGroup>();
}
