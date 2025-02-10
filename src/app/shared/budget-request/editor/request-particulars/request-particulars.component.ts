import { Component } from '@angular/core';
import {ButtonComponent} from "src/app/common/button/button.component";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'request-particulars',
  standalone: true,
  imports: [
    ButtonComponent,
    CurrencyPipe
  ],
  templateUrl: './request-particulars.component.html',
  styleUrl: './request-particulars.component.scss'
})
export class RequestParticularsComponent {

}
