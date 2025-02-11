import {Component, computed, Signal, signal, ViewChild, WritableSignal} from '@angular/core';
import {ButtonComponent} from "src/app/common/button/button.component";
import {CurrencyPipe, TitleCasePipe} from "@angular/common";
import {
  ParticularsModalComponent
} from "src/app/shared/budget-request/editor/request-particulars/expense-items/particulars-modal/particulars-modal.component";
import {ExpenseItem} from "src/app/interfaces/expense-item";
import {
  ChargeToComponent
} from "src/app/shared/budget-request/editor/request-particulars/charge-to/charge-to.component";
import {
  ExpenseItemsComponent
} from "src/app/shared/budget-request/editor/request-particulars/expense-items/expense-items.component";

@Component({
  selector: 'request-particulars',
  standalone: true,
  imports: [
    ButtonComponent,
    CurrencyPipe,
    ParticularsModalComponent,
    TitleCasePipe,
    ChargeToComponent,
    ExpenseItemsComponent
  ],
  templateUrl: './request-particulars.component.html',
  styleUrl: './request-particulars.component.scss'
})
export class RequestParticularsComponent {

}
