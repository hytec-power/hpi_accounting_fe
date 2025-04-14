import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BudgetRequest } from 'src/app/interfaces/budget-request';

@Component({
  selector: 'app-budget',
  imports: [FormsModule, CommonModule],
  templateUrl: './budget.component.html',
  styleUrl: './budget.component.scss'
})
export class BudgetComponent {
 
  record = input.required<BudgetRequest>();
  
  isEditable = false;
  onedit(){
    this.isEditable = !this.isEditable
  }


}
