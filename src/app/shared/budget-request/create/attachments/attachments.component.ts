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
  request_type = input<string>('');
  ast_type = input<string>('industrial');
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
                                 size: 10485760,
                                 bi_icon : 'bi-file-earmark-fill' });
        break;
      case 'Training / Event / Exhibition':
        this.requirements.push({ name: 'Approval letter' ,
                                 extensions: ['pdf','doc','docx','png','jpeg','jpg'],
                                 size: 10485760,
                                 bi_icon : 'bi-file-earmark-fill' });
        break;
      case 'After Sales Training':
        this.requirements.push({ name: 'Course outline' ,
                                 extensions: ['pdf','doc','docx','png','jpeg','jpg'],
                                 size: 20971520,
                                 bi_icon : 'bi-file-earmark-fill' });
        this.requirements.push({ name: 'Itinerary' ,
                                 extensions: ['pdf','doc','docx','png','jpeg','jpg','xlx','xlsx'],
                                 size: 20971520,
                                 bi_icon : 'bi-file-earmark-fill' });
        this.requirements.push({ name: 'List of Participants' ,
                                 extensions: ['pdf','doc','docx','png','jpeg','jpg','xlx','xlsx'],
                                 size: 10485760,
                                 bi_icon : 'bi-file-earmark-fill' });
        this.requirements.push({ name: 'Contingency Computation' ,
                                 extensions: ['pdf','doc','docx','png','jpeg','jpg','xlx','xlsx'],
                                 size: 20971520,
                                 bi_icon : 'bi-file-earmark-fill' });
        this.requirements.push({ name: 'MCC' ,
                                 extensions: ['pdf','doc','docx','png','jpeg','jpg'],
                                 size: 20971520,
                                 bi_icon : 'bi-file-earmark-fill' });
        if (this.ast_type() === 'industrial'){
          this.requirements.push({ name: 'Purchase order' ,
                                   extensions: ['pdf','doc','docx','png','jpeg','jpg'],
                                   size: 20971520,
                                   bi_icon : 'bi-file-earmark-fill' });
          this.requirements.push({ name: 'Quotation Ref' ,
                                 extensions: ['pdf','doc','docx','png','jpeg','jpg'],
                                 size: 20971520,
                                 bi_icon : 'bi-file-earmark-fill' });
        }
        if (this.ast_type() === 'Academe'){
          this.requirements.push({ name: 'Course outline' ,
                                   extensions: ['pdf','doc','docx','png','jpeg','jpg'],
                                   size: 20971520,
                                   bi_icon : 'bi-file-earmark-fill' });
        }
        break;
      case 'TCP':
        this.requirements.push({ name: 'Client request' ,
                                 extensions: ['pdf','doc','docx','png','jpeg','jpg'],
                                 size: 10485760,
                                 bi_icon : 'bi-file-earmark-fill' });
        break;
      case 'Sponsorship':
        this.requirements.push({ name: 'Client request letter' ,
                                 extensions: ['pdf','doc','docx','png','jpeg','jpg'],
                                 size: 10485760,
                                 bi_icon : 'bi-file-earmark-fill' });
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
