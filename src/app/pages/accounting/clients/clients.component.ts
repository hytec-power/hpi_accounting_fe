import {Component, computed, Signal, signal, viewChild, WritableSignal} from '@angular/core';
import {DropdownComponent, DropdownItem} from "src/app/common/dropdown/dropdown.component";
import {ButtonComponent} from "src/app/common/button/button.component";
import {LoaderBouncingBallsComponent} from "src/app/common/loader-bouncing-balls/loader-bouncing-balls.component";
import {PageTitleComponent} from "src/app/common/page-title/page-title.component";
import {PaginatorComponent} from "src/app/common/paginator/paginator.component";
import {SearchComponent} from "src/app/common/search/search.component";
import {ClientEditorComponent} from "src/app/pages/accounting/clients/client-editor/client-editor.component";
import {ClientsService} from "src/app/services/accounting/clients/clients.service";
import {Client} from "src/app/interfaces/client";
import {DatePipe, SlicePipe, TitleCasePipe} from "@angular/common";

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
    DatePipe,
    TitleCasePipe,
    SlicePipe
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
  items: WritableSignal<Client[]>=signal([]);
  items_filtered: Signal<Client[]>=computed(()=> this.onSort(this.onFilter(this.items(),this.query(),this.filter()),this.sort()) );
  //PAGINATION
  count: number = 0;
  items_count: number = 0;
  query: WritableSignal<string> = signal('');
  page: WritableSignal<number> = signal(1);
  sort: WritableSignal<string> = signal('');
  filter: WritableSignal<string> = signal('');

  constructor(private clientsApi: ClientsService) {
    this.init();
  }
  ngOnInit() {
   this.apiFetch();
  }
  init(){
    this.sort_types = [
      {name: 'Name (A-Z)', value: 'name_asc' },
      {name: 'Name (Z-A)', value: 'name_desc' },
      {name: 'Newest First', value: 'date_desc' },
      {name: 'Oldest First', value: 'date_asc' },
    ];
    this.filter_types = [
      {name: 'All types',value:'all' },
      {name:'School',value:'school'},
      {name:'Company',value:'company'},
    ];
    this.filter.set('all');
    this.sort.set('name_asc');

  }
  apiFetch(){
    this.loading = true;
    this.items.set([]);
    this.clientsApi.index().subscribe({
      next: data => { this.items.set(data.items);
                                               this.items_count = data.count },
      complete: () => { this.loading = false; }
    });
  }
  onFilter(items:Client[], search: string,filter: string){

    let res = items.filter(item => item.name.toLowerCase().includes(search));
    filter!= 'all' && (res = res.filter(item => item.category == filter ));
    return res;
  }
  onSort(list: Client[],sort: string){
    switch (sort) {
      case 'name_asc':  return list.sort((a,b)=> a.created_at.localeCompare(b.created_at));
      case 'name_desc': return list.sort((a,b)=> b.created_at.localeCompare(a.created_at));
      case 'date_asc':  return list.sort((a,b)=> a.created_at.localeCompare(b.created_at));
      case 'date_desc': return list.sort((a,b)=> b.created_at.localeCompare(a.created_at));
      default: return list;
    }
  }

}
