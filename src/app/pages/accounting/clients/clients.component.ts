import {Component, signal, ViewChild, WritableSignal} from '@angular/core';
import {AdeditmodalComponent} from "src/app/pages/accounting/listschoolcompany/adeditmodal/adeditmodal.component";
import {DropdownComponent, DropdownItem} from "src/app/common/dropdown/dropdown.component";
import {ButtonComponent} from "src/app/common/button/button.component";
import {LoaderBouncingBallsComponent} from "src/app/common/loader-bouncing-balls/loader-bouncing-balls.component";
import {PageTitleComponent} from "src/app/common/page-title/page-title.component";
import {PaginatorComponent} from "src/app/common/paginator/paginator.component";
import {SearchComponent} from "src/app/common/search/search.component";

@Component({
  selector: 'app-clients',
  imports: [
    AdeditmodalComponent,
    ButtonComponent,
    DropdownComponent,
    LoaderBouncingBallsComponent,
    PageTitleComponent,
    PaginatorComponent,
    SearchComponent
  ],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent {
  @ViewChild('basicdialog') child!: AdeditmodalComponent;
  @ViewChild('basicdialog2') child2!: AdeditmodalComponent;

  loading: boolean =  false;
  //DATA

  sort_types: DropdownItem[]=[];
  filter_types: DropdownItem[]=[];
  filter_status: DropdownItem[]=[];
  //PAGINATION
  count: number = 0;
  items_count: number = 0;
  query: WritableSignal<string> = signal('');
  page: WritableSignal<number> = signal(1);
  sort: WritableSignal<string> = signal('');


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
