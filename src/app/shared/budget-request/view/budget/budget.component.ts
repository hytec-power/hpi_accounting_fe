import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BudgetRequest } from 'src/app/interfaces/budget-request';
import { ButtonComponent } from "../../../../common/button/button.component";

@Component({
  selector: 'app-budget',
  imports: [FormsModule, CommonModule, ButtonComponent, ReactiveFormsModule],
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
