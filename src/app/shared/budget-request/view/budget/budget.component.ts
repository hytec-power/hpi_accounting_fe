import { Component } from '@angular/core';

@Component({
  selector: 'app-budget',
  imports: [],
  templateUrl: './budget.component.html',
  styleUrl: './budget.component.scss'
})
export class BudgetComponent {

 budget: any = [
  {
    particular:'Hotel Accomodation',
    Budget:'₱ 1,250.00',
    Qty:'10',
    Days:'3',
    Amount:'₱ 1,250.00',
  },
  {
    particular:'Hotel Accomodation',
    Budget:'₱ 1,250.00',
    Qty:'10',
    Days:'3',
    Amount:'₱ 1,250.00',
  },
  
 ]
 others: any = [
  {
    particular:'Hotel Accomodation',
    Budget:'₱ 1,250.00',
    Qty:'10',
    Days:'3',
    Amount:'₱ 1,250.00',
  },
 ]

}
