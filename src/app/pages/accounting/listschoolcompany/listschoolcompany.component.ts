import { Component, effect, signal, WritableSignal } from '@angular/core';
import { PageTitleComponent } from "../../../common/page-title/page-title.component";
import {DropdownComponent, DropdownItem} from "src/app/common/dropdown/dropdown.component";
import { ButtonComponent } from "../../../common/button/button.component";
import { LoaderBouncingBallsComponent } from "../../../common/loader-bouncing-balls/loader-bouncing-balls.component";
import { PaginatorComponent } from "../../../common/paginator/paginator.component";
import { SearchComponent } from "../../../common/search/search.component";
import {RouterLink} from "@angular/router";
import { BudgetRequestService } from 'src/app/services/employee/budget-reqeust/budget-request.service';
import { BudgetRequest } from 'src/app/interfaces/budget-request';


@Component({
  selector: 'app-listschoolcompany',
  imports: [ PageTitleComponent, DropdownComponent, ButtonComponent, LoaderBouncingBallsComponent, PaginatorComponent, SearchComponent,RouterLink],
  templateUrl: './listschoolcompany.component.html',
  styleUrl: './listschoolcompany.component.scss'
})
export class ListschoolcompanyComponent {
  loading: boolean =  false;
  //DATA

  items_count: number = 0;
  sort_types: DropdownItem[]=[];
  filter_types: DropdownItem[]=[];
  filter_status: DropdownItem[]=[];
  //PAGINATION

  constructor(private br: BudgetRequestService) {
    this.init();
  }
  ngOnInit() {
  }
  init(){
    this.sort_types = [
      {name: 'Newest First', value: 'date_desc' },
      {name: 'Oldest First', value: 'date_asc' },
      {name: 'Requester (A-Z)', value: 'name_asc' },
      {name: 'Requester (Z-A)', value: 'name_desc' },
    ];
    this.filter_types = [
      {name: 'All types',value:'all' },
      {name:'School',value:'date_desc'},
      {name:'Company',value:'date_desc'},
    ]


  }
}
