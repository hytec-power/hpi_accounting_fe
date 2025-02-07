import { Component } from '@angular/core';
import {BudgetRequestViewComponent} from "src/app/shared/budget-request/view/view.component";

@Component({
  selector: 'app-view',
  standalone: true,
    imports: [
        BudgetRequestViewComponent
    ],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewComponent {

}
