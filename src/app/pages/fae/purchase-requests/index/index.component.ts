import { Component } from '@angular/core';
import {ButtonComponent} from "src/app/common/button/button.component";
import {PageTitleComponent} from "src/app/common/page-title/page-title.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-index',
  imports: [
    ButtonComponent,
    PageTitleComponent,
    RouterLink
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

}
