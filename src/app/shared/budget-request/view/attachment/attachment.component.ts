import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BudgetRequest } from 'src/app/interfaces/budget-request';

@Component({
  selector: 'app-attachment',
  imports: [FormsModule, CommonModule],
  templateUrl: './attachment.component.html',
  styleUrl: './attachment.component.scss'
})
export class AttachmentComponent {
  record = input.required<BudgetRequest>();
  isEditable = false;
  onedit(){
    this.isEditable = !this.isEditable
  }
}
