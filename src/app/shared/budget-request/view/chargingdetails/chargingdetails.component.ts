import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { BudgetRequest } from 'src/app/interfaces/budget-request';
import { ButtonComponent } from "../../../../common/button/button.component";
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-chargingdetails',
  imports: [CommonModule, ButtonComponent, ReactiveFormsModule],
  templateUrl: './chargingdetails.component.html',
  styleUrl: './chargingdetails.component.scss'
})
export class ChargingdetailsComponent {
  form  = input.required<FormGroup>();
  isEditable = false;
  onedit(){
    this.isEditable = !this.isEditable
  }
}
