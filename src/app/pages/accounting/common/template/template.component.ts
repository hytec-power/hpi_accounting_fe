import { Component } from '@angular/core';
import {HeaderComponent} from "src/app/pages/accounting/common/header/header.component";
import {SidebarComponent} from "src/app/pages/accounting/common/sidebar/sidebar.component";

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [
    HeaderComponent,
    SidebarComponent
  ],
  templateUrl: './template.component.html',
  styleUrl: './template.component.scss'
})
export class AccountingTemplateComponent {

}
