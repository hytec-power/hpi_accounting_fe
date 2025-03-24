import { Component } from '@angular/core';
import {BudgetRequestViewComponent} from "src/app/shared/budget-request/view/view.component";
import {PageTitleComponent} from "src/app/common/page-title/page-title.component";

@Component({
    selector: 'app-view',
    imports: [
        BudgetRequestViewComponent,
        PageTitleComponent
    ],
    templateUrl: './view.component.html',
    styleUrl: './view.component.scss'
})
export class ViewComponent {

}
