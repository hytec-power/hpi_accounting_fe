import { Component } from '@angular/core';
import {PageTitleComponent} from "src/app/common/page-title/page-title.component";
import {RouterLink} from "@angular/router";
import {ButtonComponent} from "src/app/common/button/button.component";
import {BudgetRequestService} from "src/app/services/employee/budget-reqeust/budget-request.service";
import {BudgetRequest} from "src/app/interfaces/budget-request";
import {LoaderBouncingBallsComponent} from "src/app/common/loader-bouncing-balls/loader-bouncing-balls.component";
import {CurrencyPipe, DatePipe, TitleCasePipe} from "@angular/common";
import {PaginatorComponent} from "src/app/common/paginator/paginator.component";

@Component({
    selector: 'app-index',
  imports: [
    PageTitleComponent,
    RouterLink,
    ButtonComponent,
    LoaderBouncingBallsComponent,
    TitleCasePipe,
    DatePipe,
    CurrencyPipe,
    PaginatorComponent
  ],
    templateUrl: './index.component.html',
    styleUrl: './index.component.scss'
})
export class IndexComponent {
  //UI
  loading: boolean =  false;
  //DATA
  items: BudgetRequest[] = [];
  constructor(private br: BudgetRequestService) {
  }
  ngOnInit() {
    this.apiFetch();
  }
  apiFetch(){
    this.loading = true;
    this.items = [];
    this.br
        .index()
        .subscribe({next: data => this.items = data})
        .add(()=> this.loading = false);
  }
}
