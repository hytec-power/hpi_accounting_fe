import {Component, effect, signal, WritableSignal} from '@angular/core';
import {PageTitleComponent} from "src/app/common/page-title/page-title.component";
import {ThemeService} from "src/app/services/theme/theme.service";
import {RouterLink} from "@angular/router";
import {BudgetRequest} from "src/app/interfaces/budget-request";
import {LoaderBouncingBallsComponent} from "src/app/common/loader-bouncing-balls/loader-bouncing-balls.component";
import {BudgetRequestService} from "src/app/services/accounting/budget-request/budget-request.service";
import {CurrencyPipe, DatePipe, TitleCasePipe} from "@angular/common";
import {SearchComponent} from "src/app/common/search/search.component";
import {DropdownComponent, DropdownItem} from "src/app/common/dropdown/dropdown.component";
import {PaginatorComponent} from "src/app/common/paginator/paginator.component";


@Component({
    selector: 'app-index',
  imports: [
    PageTitleComponent,
    RouterLink,
    LoaderBouncingBallsComponent,
    TitleCasePipe,
    CurrencyPipe,
    DatePipe,
    SearchComponent,
    DropdownComponent,
    PaginatorComponent
  ],
    templateUrl: './index.component.html',
    styleUrl: './index.component.scss'
})
export class IndexComponent {
  loading: boolean = true;
  //DATA
  items: BudgetRequest[]=[];
  dropdown_types: DropdownItem[]=[];
  dropdown_status: DropdownItem[]=[];
  dropdown_sort: DropdownItem[]=[];

  //PAGINATION
  page: WritableSignal<number> = signal(1);
  type!: WritableSignal<DropdownItem>;
  status!: WritableSignal<DropdownItem>;
  sort!: WritableSignal<DropdownItem>;
  query: WritableSignal<string> = signal('');

  constructor(private brApi: BudgetRequestService) {
    this.initDropdown();
    effect(() => this.apiFetch(this.page(),this.query(),this.sort().value,this.type().value,this.status().value));
  }
  ngOnInit() {

  }
  initDropdown() {
    this.dropdown_types = [ {name: 'All types',value:'all' },
                            {name:'Bidding Documents',value:'Bidding Documents'},
                            {name:'Training / Event / Exhibition',value:'Training / Event / Exhibition'},
                            {name:'After Sales Training',value:'After Sales Training'},
                            {name:'TCP',value:'TCP'},
                            {name:'Sponsorship',value:'Sponsorship'}];
    this.dropdown_status = [{name: 'All status',value:'all' },
                            {name:'For Reviewal',value:'For Reviewal'},
                            {name:'Approved',value:'Approved'}];
    this.dropdown_sort = [{ name: 'Newest First',value:'date_desc' },
                          { name: 'Oldest First',value:'date_asc' }];

    this.type = signal(this.dropdown_types[0]);
    this.status = signal(this.dropdown_status[0]);
    this.sort = signal(this.dropdown_sort[0]);

  }
  apiFetch(page: number,query: string,sort:string,type: string,status: string){
    this.loading = true;
    this.brApi.index(page,query,sort,type,status).subscribe({
      next: data => this.items = data,
      complete: () => this.loading = false
    });
  }
}
