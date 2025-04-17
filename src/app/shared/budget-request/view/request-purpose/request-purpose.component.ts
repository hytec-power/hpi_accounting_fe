import {Component, input} from '@angular/core';
import {BudgetRequest} from "src/app/interfaces/budget-request";
import {CommonModule, JsonPipe} from "@angular/common";
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from "../../../../common/button/button.component";

@Component({
    selector: 'request-purpose',
  imports: [FormsModule, CommonModule, ButtonComponent],
    templateUrl: './request-purpose.component.html',
    styleUrl: './request-purpose.component.scss'
})
export class RequestPurposeComponent {
  record = input.required<BudgetRequest>();

  constructor() {}
  ngOnInit() {}
  
  isEditable = false;
  onedit(){
    this.isEditable = !this.isEditable
  }
}