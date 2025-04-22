import {Component, effect, signal, WritableSignal} from '@angular/core';
import {PageTitleComponent} from "src/app/common/page-title/page-title.component";
import {RouterLink} from "@angular/router";
import {ButtonComponent} from "src/app/common/button/button.component";
import {BudgetRequestService} from "src/app/services/employee/budget-reqeust/budget-request.service";
import {BudgetRequest} from "src/app/interfaces/budget-request";
import {LoaderBouncingBallsComponent} from "src/app/common/loader-bouncing-balls/loader-bouncing-balls.component";
import {DatePipe} from "@angular/common";
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
    DatePipe,
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
  items_count: number = 0;
  sort_types: DropdownItem[]=[];
  filter_types: DropdownItem[]=[];
  filter_status: DropdownItem[]=[];
  //PAGINATION
  page : WritableSignal<number> = signal(1);
  query_input: WritableSignal<string> = signal('');
  query: WritableSignal<string> = signal('');
  type!: WritableSignal<DropdownItem>;
  status!: WritableSignal<DropdownItem>
  sort!: WritableSignal<DropdownItem>
  constructor(private br: BudgetRequestService) {
    this.init();
    effect(() => this.apiFetch(this.page(),this.query(),this.sort().value,this.type().value,this.status().value));
  }
  ngOnInit() {
  }
  init(){
    this.sort_types = [
      {name: 'Newest First', value: 'date_desc' },
      {name: 'Oldest First', value: 'date_asc' }
    ];
    this.filter_types = [
      {name: 'All types',value:'all' },
      {name:'Bidding Documents',value:'Bidding Documents'},
      {name:'Training / Event / Exhibition',value:'Training / Event / Exhibition'},
      {name:'After Sales Training',value:'After Sales Training'},
      {name:'TCP',value:'TCP'},
      {name:'Sponsorship',value:'Sponsorship'},
    ];
    this.filter_status = [
      {name: 'All status',value:'all' },
      {name:'For Reviewal',value:'For Reviewal'},
      {name:'Approved',value:'Approved'}
    ];

    this.type = signal(this.filter_types[0]);
    this.status = signal(this.filter_status[0]);
    this.sort = signal(this.sort_types[0]);

  }
  apiFetch(page: number,query: string,sort: string, type: string,status: string){
    this.loading = true;
    this.items = [];
    this.br
        .index(page,query,sort,type,status)
        .subscribe({next: data => { this.items = data.items ; this.items_count = data.count }})
        .add(()=> this.loading = false);
  }
  onSearch(query: string){
    this.page.set(1);
    this.query.set(query);
  }
}
