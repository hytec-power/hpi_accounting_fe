import { Component, effect, signal, ViewChild, WritableSignal } from '@angular/core';
import { PageTitleComponent } from "../../../common/page-title/page-title.component";
import {DropdownComponent, DropdownItem} from "src/app/common/dropdown/dropdown.component";
import { ButtonComponent } from "../../../common/button/button.component";
import { LoaderBouncingBallsComponent } from "../../../common/loader-bouncing-balls/loader-bouncing-balls.component";
import { PaginatorComponent } from "../../../common/paginator/paginator.component";
import { SearchComponent } from "../../../common/search/search.component";
import {RouterLink} from "@angular/router";
import { BudgetRequestService } from 'src/app/services/employee/budget-reqeust/budget-request.service';
import { BudgetRequest } from 'src/app/interfaces/budget-request';
import { AdeditmodalComponent } from './adeditmodal/adeditmodal.component';


@Component({
  selector: 'app-listschoolcompany',
  imports: [PageTitleComponent, DropdownComponent, ButtonComponent, LoaderBouncingBallsComponent, PaginatorComponent, SearchComponent, RouterLink, AdeditmodalComponent],
  templateUrl: './listschoolcompany.component.html',
  styleUrl: './listschoolcompany.component.scss'
})
export class ListschoolcompanyComponent {
  @ViewChild('basicdialog') child!: AdeditmodalComponent;
  @ViewChild('basicdialog2') child2!: AdeditmodalComponent;
  
  loading: boolean =  false;
  //DATA

  items_count: number = 0;
  sort_types: DropdownItem[]=[];
  filter_types: DropdownItem[]=[];
  filter_status: DropdownItem[]=[];
  //PAGINATION

  constructor() {
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
  openadd() {
    this.child.isEdit = false;
    this.child.openDialog();
  }
  onedit() {
    this.child.isEdit = true;
    this.child.openDialog();
  }
  ondelete(){
    this.child2.openConfirmDialog()
  }
}
