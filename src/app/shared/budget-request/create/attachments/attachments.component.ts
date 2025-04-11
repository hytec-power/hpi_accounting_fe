import {Component, input, output} from '@angular/core';
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
  //
  request_type = input<string>('Bidding Documents');
  //NAVS
  onNext = output();
  onBack = output();
  //DATA
  requirements: FileRequirement[]=[];

  constructor() {
    this.init();
  }
  ngOnInit() {
  }
  init(){
    switch (this.request_type()){
      case 'Bidding Documents':
        this.requirements.push({ name: 'Intention to Bid' ,
                                 extensions: ['pdf','doc','docx','png','jpeg','jpg'],
                                 size: 20971520,
                                 bi_icon : 'bi-file-earmark-fill' });
        break;
      case 'Training / Event / Exhibition':
        break;
      case 'After Sales Training':
        break;
      case 'TCP':
        break;
      case 'Sponsorship':
        break;
    }
  }
}
interface FileRequirement {
   name: string;
   extensions: string[];
   size: number;
   bi_icon: string;
}
