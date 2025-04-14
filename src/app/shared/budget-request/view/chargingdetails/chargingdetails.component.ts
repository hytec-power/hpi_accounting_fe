import { Component, input } from '@angular/core';
import { BudgetRequest } from 'src/app/interfaces/budget-request';

@Component({
  selector: 'app-chargingdetails',
  imports: [],
  templateUrl: './chargingdetails.component.html',
  styleUrl: './chargingdetails.component.scss'
})
export class ChargingdetailsComponent {
  record = input.required<BudgetRequest>();
}
