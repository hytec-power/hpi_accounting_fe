import { Component } from '@angular/core';
import {ButtonComponent} from "src/app/common/button/button.component";

@Component({
  selector: 'request-attachments',
  standalone: true,
  imports: [
    ButtonComponent
  ],
  templateUrl: './request-attachments.component.html',
  styleUrl: './request-attachments.component.scss'
})
export class RequestAttachmentsComponent {

}
