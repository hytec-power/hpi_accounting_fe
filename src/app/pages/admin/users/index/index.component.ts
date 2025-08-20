import {Component, computed, ResourceRef, Signal, signal, WritableSignal} from '@angular/core';
import {PageTitleComponent} from "src/app/common/page-title/page-title.component";
import {AddComponent} from "src/app/pages/admin/users/index/add/add.component";
import {ButtonComponent} from "src/app/common/button/button.component";
import {rxResource} from "@angular/core/rxjs-interop";
import { User } from "src/app/interfaces/user";
import {AccountsService} from "src/app/services/sysad/accounts.service";
import {LoaderBouncingBallsComponent} from "src/app/common/loader-bouncing-balls/loader-bouncing-balls.component";
import {DatePipe, TitleCasePipe} from "@angular/common";

@Component({
  selector: 'app-index',
  imports: [
    PageTitleComponent,
    AddComponent,
    ButtonComponent,
    LoaderBouncingBallsComponent,
    TitleCasePipe,
    DatePipe
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {
  accounts_resource!: ResourceRef<User[]| undefined>;
  query: WritableSignal<string> = signal('');
  params = computed(()=> ({ query: this.query() }) );
  constructor(private accounts: AccountsService) {
    this.initResource();
  }
  initResource(){
    this.accounts_resource = rxResource({
      request: () => this.params(),
      loader: ({request}) => this.accounts.list()
    });
  }
  onAdd($event: NewUser) {

  }
}
export interface NewUser{
  email: string,
  role: string
}
