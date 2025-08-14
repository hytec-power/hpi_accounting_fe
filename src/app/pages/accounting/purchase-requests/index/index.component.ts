import { Component } from '@angular/core';
import {ButtonComponent} from "src/app/common/button/button.component";
import {CurrencyPipe, DatePipe} from "@angular/common";
import {PageTitleComponent} from "src/app/common/page-title/page-title.component";
import {PaginatorComponent} from "src/app/common/paginator/paginator.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-index',
  imports: [
    ButtonComponent,
    CurrencyPipe,
    DatePipe,
    PageTitleComponent,
    PaginatorComponent,
    RouterLink
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {
  today = new Date();
}
