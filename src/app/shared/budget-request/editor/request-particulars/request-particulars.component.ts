import {Component} from '@angular/core';
import {ChargeToComponent} from "src/app/shared/budget-request/editor/request-particulars/charge-to/charge-to.component";
import {ExpenseItemsComponent} from "src/app/shared/budget-request/editor/request-particulars/expense-items/expense-items.component";

@Component({
    selector: 'request-particulars',
    imports: [
        ChargeToComponent,
        ExpenseItemsComponent
    ],
    templateUrl: './request-particulars.component.html',
    styleUrl: './request-particulars.component.scss'
})
export class RequestParticularsComponent {

}
