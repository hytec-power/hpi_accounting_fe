import {Component, effect, input, model, output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from 'src/app/common/button/button.component';
import {FileUploadComponent} from "src/app/common/file-upload/file-upload.component";
import {ModalsService} from "src/app/services/common/modals/modals.service";
import {FileUpload} from "src/app/interfaces/file-upload";
import {DocumentUpload} from "src/app/interfaces/budget-request";

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
  attachments = model<DocumentUpload[]>([]);

  constructor(private modals: ModalsService) {}
  ngOnInit() {
    this.init(this.request_type());
    // this.init('Bidding Documents');
  }
  init(type: string) {
    switch (type){
      case 'Bidding Documents':
        this.requirements.push({ name: 'Intention to Bid' ,
                                 extensions: ['pdf','doc','docx','png','jpeg','jpg'],
                                 size: 10485760,
                                 bi_icon : 'bi-file-earmark-fill' });
        this.requirements.push({ name: 'Final Quotation Copy' ,
                                 extensions: ['pdf','doc','docx','png','jpeg','jpg'],
                                 size: 10485760,
                                 bi_icon : 'bi-file-earmark-fill' });
        this.requirements.push({ name: 'Contingency' ,
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
  confirmBack(){
    this.modals.getInstance()?.showConfirm('Confirm Action',
                                            'Attached files be discarded if you go back to previous page, continue?',
                                            'Yes',
                                            'Cancel',()=>this.back());
  }
  onUpload(file: FileUpload,name: string) {
    this.attachments.update(items=> [...items,{name: name, uuid: file.uuid , file: file, ext: file.ext}] );
  }
  onRemove(name: string) {
    this.attachments.update(items=> items.filter(i=>i.name!= name));
  }
  back(){
    this.attachments.set([]);
    this.onBack.emit()
  }
  isComplete(){
    return this.attachments().length == this.requirements.length;
  }
}

interface FileRequirement {
   name: string;
   extensions: string[];
   size: number;
   bi_icon: string;
}
