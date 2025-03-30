import { Component } from '@angular/core';
import { ButtonComponent } from 'src/app/common/button/button.component';

@Component({
  selector: 'app-attachments',
  imports: [ButtonComponent],
  templateUrl: './attachments.component.html',
  styleUrl: './attachments.component.scss'
})
export class AttachmentsComponent {
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
