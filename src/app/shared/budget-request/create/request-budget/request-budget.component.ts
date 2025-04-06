import {Component, input, output, signal, WritableSignal} from '@angular/core';
import {ButtonComponent} from "src/app/common/button/button.component";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'request-budget',
  imports: [
    ButtonComponent
  ],
  templateUrl: './request-budget.component.html',
  styleUrl: './request-budget.component.scss'
})
export class RequestBudgetComponent {
  page: WritableSignal<number> = signal(0);
  form_budget = input.required<FormGroup>();
  onNext = output();
  onBack = output();
}
