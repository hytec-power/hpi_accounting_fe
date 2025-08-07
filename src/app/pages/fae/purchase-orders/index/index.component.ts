import { Component } from '@angular/core';
import {ButtonComponent} from "src/app/common/button/button.component";
import {RouterLink} from "@angular/router";
import {PageTitleComponent} from "src/app/common/page-title/page-title.component";

@Component({
  selector: 'app-index',
  imports: [
    ButtonComponent,
    RouterLink,
    PageTitleComponent
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class POIndexComponent {

}
