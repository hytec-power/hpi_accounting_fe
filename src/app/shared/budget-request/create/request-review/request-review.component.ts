import { Component } from '@angular/core';
import {ButtonComponent} from "src/app/common/button/button.component";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'request-review',
  imports: [
    ButtonComponent,
    CurrencyPipe
  ],
  templateUrl: './request-review.component.html',
  styleUrl: './request-review.component.scss'
})
export class RequestReviewComponent {

}
