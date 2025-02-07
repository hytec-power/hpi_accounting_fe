import { Component } from '@angular/core';
import {BudgetRequestViewComponent} from "src/app/shared/budget-request/view/view.component";

@Component({
  selector: 'app-index',
  standalone: true,
    imports: [
        BudgetRequestViewComponent
    ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

}
