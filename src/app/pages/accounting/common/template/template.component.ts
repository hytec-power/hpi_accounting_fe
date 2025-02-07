import { Component } from '@angular/core';
import {SidebarComponent} from "src/app/pages/accounting/common/sidebar/sidebar.component";
import {RouterOutlet} from "@angular/router";
import {HeaderComponent} from "src/app/common/templates/header/header.component";

@Component({
  selector: 'app-template',
  standalone: true,
    imports: [
        SidebarComponent,
        RouterOutlet,
        HeaderComponent
    ],
  templateUrl: './template.component.html',
  styleUrl: './template.component.scss'
})
export class AccountingTemplateComponent {

}
