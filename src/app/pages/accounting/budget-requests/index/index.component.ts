import { Component } from '@angular/core';
import {PageTitleComponent} from "src/app/common/page-title/page-title.component";
import {ThemeService} from "src/app/services/theme/theme.service";
import {RouterLink} from "@angular/router";
import {BudgetRequest} from "src/app/interfaces/budget-request";
import {LoaderBouncingBallsComponent} from "src/app/common/loader-bouncing-balls/loader-bouncing-balls.component";
import {BudgetRequestService} from "src/app/services/accounting/budget-request/budget-request.service";
import {CurrencyPipe, DatePipe, TitleCasePipe} from "@angular/common";


@Component({
    selector: 'app-index',
  imports: [
    PageTitleComponent,
    RouterLink,
    LoaderBouncingBallsComponent,
    TitleCasePipe,
    CurrencyPipe,
    DatePipe
  ],
    templateUrl: './index.component.html',
    styleUrl: './index.component.scss'
})
export class IndexComponent {
  loading: boolean = true;
  items: BudgetRequest[]=[];
  constructor(private brApi: BudgetRequestService) {

  }
  ngOnInit() {
    this.apiFetch();
  }
  apiFetch(){
    this.loading = true;
    this.brApi.index().subscribe({
      next: data => this.items = data,
      complete: () => this.loading = false
    });
  }
}
