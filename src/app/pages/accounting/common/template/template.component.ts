import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {HeaderComponent} from "src/app/common/templates/header/header.component";
import {SidebarComponent} from "src/app/common/templates/sidebar/sidebar.component";

@Component({
  selector: 'app-template',
  standalone: true,
    imports: [
        RouterOutlet,
        HeaderComponent,
        SidebarComponent
    ],
  templateUrl: './template.component.html',
  styleUrl: './template.component.scss'
})
export class AccountingTemplateComponent {

}
