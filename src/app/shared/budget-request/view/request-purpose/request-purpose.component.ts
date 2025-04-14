import {Component, input} from '@angular/core';
import {BudgetRequest} from "src/app/interfaces/budget-request";
import {JsonPipe} from "@angular/common";

@Component({
    selector: 'request-purpose',
  imports: [],
    templateUrl: './request-purpose.component.html',
    styleUrl: './request-purpose.component.scss'
})
export class RequestPurposeComponent {
  record = input.required<BudgetRequest>();
    purpose: any = [
        'Client Visit',
        'Occular Visit',
        'Faculty Immersion',
        'Delivery',
       ]
  constructor() {}
  ngOnInit() {}
}
