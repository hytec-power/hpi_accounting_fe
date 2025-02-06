import { Component } from '@angular/core';
import {PageTitleComponent} from "src/app/common/page-title/page-title.component";

@Component({
  selector: 'view-request',
  standalone: true,
  imports: [
    PageTitleComponent
  ],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewComponent {

}
