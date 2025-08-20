import { Component } from '@angular/core';
import {PageTitleComponent} from "src/app/common/page-title/page-title.component";
import {AddComponent} from "src/app/pages/admin/users/index/add/add.component";
import {ButtonComponent} from "src/app/common/button/button.component";

@Component({
  selector: 'app-index',
  imports: [
    PageTitleComponent,
    AddComponent,
    ButtonComponent
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

}
export interface NewUser{
  email: string,
  role: string
}
