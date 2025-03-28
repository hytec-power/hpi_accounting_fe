import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from 'src/app/common/button/button.component';

@Component({
  selector: 'app-attachments',
  imports: [
    ButtonComponent,
    FormsModule,
  ],
  templateUrl: './attachments.component.html',
  styleUrl: './attachments.component.scss'
})
export class AttachmentsComponent {

}
