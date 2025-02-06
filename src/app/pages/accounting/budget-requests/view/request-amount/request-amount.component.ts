import { Component } from '@angular/core';
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'request-amount',
  standalone: true,
  imports: [
    CurrencyPipe
  ],
  templateUrl: './request-amount.component.html',
  styleUrl: './request-amount.component.scss'
})
export class RequestAmountComponent {

}
