import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {HeaderComponent} from "src/app/common/templates/header/header.component";
import {SidebarComponent, SidebarItem} from "src/app/common/templates/sidebar/sidebar.component";

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
    sidebar_items: SidebarItem[]=[];
    constructor() {
        this.initSidebar();
    }
    initSidebar(){
        this.sidebar_items.push({name: 'Dashboard',
                                 link: '/accounting',
                                 bi_icon: 'bi-house',
                                 bi_icon_active: 'bi-house-door-fill',
                                 exact: true });

        this.sidebar_items.push({name: 'Budget Request',
                                 link: '/accounting/budget-requests' ,
                                 bi_icon: 'bi-wallet2',
                                 bi_icon_active: 'bi-wallet-fill',
                                 exact: false });
    }
}
