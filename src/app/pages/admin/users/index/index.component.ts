import {Component, computed, ResourceRef, Signal, signal, WritableSignal} from '@angular/core';
import {PageTitleComponent} from "src/app/common/page-title/page-title.component";
import {AddComponent} from "src/app/pages/admin/users/index/add/add.component";
import {ButtonComponent} from "src/app/common/button/button.component";
import {rxResource} from "@angular/core/rxjs-interop";
import { User } from "src/app/interfaces/user";
import {AccountsService} from "src/app/services/sysad/accounts.service";
import {LoaderBouncingBallsComponent} from "src/app/common/loader-bouncing-balls/loader-bouncing-balls.component";
import {DatePipe, TitleCasePipe} from "@angular/common";
import {PaginatorComponent} from "src/app/common/paginator/paginator.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-index',
  imports: [
    PageTitleComponent,
    AddComponent,
    ButtonComponent,
    LoaderBouncingBallsComponent,
    TitleCasePipe,
    DatePipe,
    PaginatorComponent,
    FormsModule
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {
  accounts_resource!: ResourceRef<{ count: number, items: User[]}| undefined>;
  query: WritableSignal<string> = signal('');
  params = computed(()=> ({ query: this.query() ,
                                                                                              page: this.current_page(),
                                                                                              sort: this.sort()}) );
  current_page: WritableSignal<number> = signal(1);
  sort: WritableSignal<string> = signal('date_desc');

  constructor(private accounts: AccountsService) {
    this.initResource();
  }
  initResource(){
    this.accounts_resource = rxResource({
      request: () => this.params(),
      loader: ({request}) => this.accounts.list(request)
    });
  }
  onAdd($event: NewUser) {

  }
}
export interface NewUser{
  email: string,
  role: string
}
