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
}

