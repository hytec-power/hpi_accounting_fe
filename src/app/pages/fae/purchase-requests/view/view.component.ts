import { Component } from '@angular/core';
import {PageTitleComponent} from "src/app/common/page-title/page-title.component";
import {ViewPrComponent} from "src/app/shared/purchase-request/view/view.component";


@Component({
  selector: 'app-view',
  imports: [
    PageTitleComponent,
    ViewPrComponent,
  ],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewComponent {

}
