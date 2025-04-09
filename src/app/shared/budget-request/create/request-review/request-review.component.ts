import {Component, input, output} from '@angular/core';
import {ButtonComponent} from "src/app/common/button/button.component";
import {CurrencyPipe, DatePipe} from "@angular/common";
import {BudgetRequest} from "src/app/interfaces/budget-request";

@Component({
  selector: 'request-review',
  imports: [
    ButtonComponent,
    CurrencyPipe,
    DatePipe
  ],
  templateUrl: './request-review.component.html',
  styleUrl: './request-review.component.scss'
})
export class RequestReviewComponent {
  data = input.required<BudgetRequest|null>();
  onBack = output();
  onSubmit = output();

}
