import { CommonModule } from '@angular/common';
import { Component, input, model } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BudgetRequest } from 'src/app/interfaces/budget-request';
import { FileSizePipe } from './file-size.pipe';

@Component({
  selector: 'app-attachment',
  imports: [FormsModule, 
        CommonModule, 
        FileSizePipe, 
        ReactiveFormsModule],
  templateUrl: './attachment.component.html',
  styleUrl: './attachment.component.scss'
})
export class AttachmentComponent {
  record = input.required<BudgetRequest>();
  isEditable = false;
  ngOnInit(){
  }
  onedit(){
    this.isEditable = !this.isEditable
  }
  getExt(str: string){
    switch (str){
        case 'xlsx':
          return 'bi-filetype-xlsx'
        case 'png':
          return 'bi-filetype-png'
        case 'jpg':
          return 'bi-filetype-jpg'
        case 'pdf':
          return 'bi-filetype-pdf'
        case 'doc':
          return 'bi-filetype-doc'
        case 'docx':
          return 'bi-filetype-docx'
        default:
          return 'bi-file-earmark-fill'
      }
  }
}

export interface attachmentIcon{
    bi: string
}

