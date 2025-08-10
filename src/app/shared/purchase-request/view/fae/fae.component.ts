import { Component } from '@angular/core';
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'pr-fae',
  imports: [
    CurrencyPipe
  ],
  templateUrl: './fae.component.html',
  styleUrl: './fae.component.scss'
})
export class FaeComponent {

}
