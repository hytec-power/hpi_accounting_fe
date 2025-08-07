import {Component, input, output} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {ButtonComponent} from "src/app/common/button/button.component";

@Component({
  selector: 'pr-attachments',
  imports: [
    ButtonComponent
  ],
  templateUrl: './attachments.component.html',
  styleUrl: './attachments.component.scss'
})
export class AttachmentsComponent {
  next = output<void>();
  back = output<void>();
  form = input<FormGroup>();
}
