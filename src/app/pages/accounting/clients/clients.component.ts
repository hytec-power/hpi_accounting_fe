import {Component, signal, viewChild, WritableSignal} from '@angular/core';
import {DropdownComponent, DropdownItem} from "src/app/common/dropdown/dropdown.component";
import {ButtonComponent} from "src/app/common/button/button.component";
import {LoaderBouncingBallsComponent} from "src/app/common/loader-bouncing-balls/loader-bouncing-balls.component";
import {PageTitleComponent} from "src/app/common/page-title/page-title.component";
import {PaginatorComponent} from "src/app/common/paginator/paginator.component";
import {SearchComponent} from "src/app/common/search/search.component";
import {ClientEditorComponent} from "src/app/pages/accounting/clients/client-editor/client-editor.component";
import {ClientsService} from "src/app/services/accounting/clients/clients.service";
import {Client} from "src/app/interfaces/client";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-clients',
  imports: [
    ButtonComponent,
    DropdownComponent,
    LoaderBouncingBallsComponent,
    PageTitleComponent,
    PaginatorComponent,
    SearchComponent,
    ClientEditorComponent,
    DatePipe
  ],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent {
  editor = viewChild.required('editor',{read: ClientEditorComponent});

  loading: boolean =  false;
  //DATA
  sort_types: DropdownItem[]=[];
  filter_types: DropdownItem[]=[];
  filter_status: DropdownItem[]=[];
  items: Client[]=[];
  items_filtered: Client[]=[];
  //PAGINATION
  count: number = 0;
  items_count: number = 0;
  query: WritableSignal<string> = signal('');
  page: WritableSignal<number> = signal(1);
  sort: WritableSignal<string> = signal('');

  constructor(private clientsApi: ClientsService) {
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
    this.filter_types = [
      {name: 'All types',value:'all' },
      {name:'School',value:'date_desc'},
      {name:'Company',value:'date_desc'},
    ]
  }
  apiFetch(){
    this.loading = true;
    this.items = [];
    this.items_filtered = [];
    this.clientsApi.index().subscribe({
      next: data => { this.items = data.items;
                                               this.items_filtered = data.items;
                                               this.items_count = data.count },
      complete: () => { this.loading = false; }
    });
  }
}
