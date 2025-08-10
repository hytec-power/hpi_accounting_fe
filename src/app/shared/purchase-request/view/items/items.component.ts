import { Component } from '@angular/core';
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'pr-items',
  imports: [
    CurrencyPipe
  ],
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss'
})
export class ItemsComponent {

}
