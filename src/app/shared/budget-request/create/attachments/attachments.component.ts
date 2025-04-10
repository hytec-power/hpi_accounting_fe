import {Component, output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from 'src/app/common/button/button.component';
import {FileUploadComponent} from "src/app/common/file-upload/file-upload.component";

@Component({
  selector: 'request-attachments',
  imports: [
    ButtonComponent,
    FormsModule,
    FileUploadComponent,
  ],
  templateUrl: './attachments.component.html',
  styleUrl: './attachments.component.scss'
})
export class AttachmentsComponent {
  onNext = output();
  onBack = output();


  imagePreview: string | undefined;

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

}
