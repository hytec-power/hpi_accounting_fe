import { Component } from '@angular/core';
import {PageTitleComponent} from "src/app/common/page-title/page-title.component";
import {RouterLink} from "@angular/router";
import {ButtonComponent} from "src/app/common/button/button.component";
import {BudgetRequestService} from "src/app/services/employee/budget-reqeust/budget-request.service";
import {BudgetRequest} from "src/app/interfaces/budget-request";
import {LoaderBouncingBallsComponent} from "src/app/common/loader-bouncing-balls/loader-bouncing-balls.component";
import {CurrencyPipe, DatePipe, TitleCasePipe} from "@angular/common";
import {PaginatorComponent} from "src/app/common/paginator/paginator.component";
import {DropdownComponent, DropdownItem} from "src/app/common/dropdown/dropdown.component";
import {SearchComponent} from "src/app/common/search/search.component";

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
    PaginatorComponent,
    DropdownComponent,
    SearchComponent
  ],
    templateUrl: './index.component.html',
    styleUrl: './index.component.scss'
})
export class IndexComponent {
  //UI
  loading: boolean =  false;
  //DATA
  items: BudgetRequest[] = [];
  sort_types: DropdownItem[]=[];
  filter_types: DropdownItem[]=[];
  constructor(private br: BudgetRequestService) {
    this.init();
  }
  ngOnInit() {
    this.apiFetch();
  }
  init(){
    this.sort_types = [
      {name: 'Newest First', value: 'date_desc' },
      {name: 'Oldest First', value: 'date_asc' },
      {name: 'Requester (A-Z)', value: 'name_asc' },
      {name: 'Requester (Z-A)', value: 'name_desc' },
    ];
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
