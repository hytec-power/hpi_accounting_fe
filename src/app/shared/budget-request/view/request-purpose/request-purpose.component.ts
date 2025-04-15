import {Component, input} from '@angular/core';
import {BudgetRequest} from "src/app/interfaces/budget-request";
import {CommonModule, JsonPipe} from "@angular/common";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'request-purpose',
  imports: [FormsModule, CommonModule],
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
