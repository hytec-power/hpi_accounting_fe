import { Component } from '@angular/core';
import {ButtonComponent} from "src/app/common/button/button.component";
import {PageTitleComponent} from "src/app/common/page-title/page-title.component";
import {RouterLink} from "@angular/router";
import {CurrencyPipe, DatePipe} from "@angular/common";
import {PaginatorComponent} from "src/app/common/paginator/paginator.component";

@Component({
  selector: 'app-index',
  imports: [
    ButtonComponent,
    PageTitleComponent,
    RouterLink,
    CurrencyPipe,
    DatePipe,
    PaginatorComponent
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {
  today = new Date();
}
