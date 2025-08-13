import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {HeaderComponent} from "src/app/common/templates/header/header.component";
import {SidebarComponent, SidebarItem} from "src/app/common/templates/sidebar/sidebar.component";

@Component({
    selector: 'app-template',
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
      const po_items: SidebarItem[] = [
          {name: 'Purchase Requests',
            link: '/accounting/purchase-requests' ,
            bi_icon: 'bi-building',
            bi_icon_active: 'bi-building-fill',
            exact: false },
          { name: 'Purchase Orders',
            link: '/accounting/purchase-orders' ,
            bi_icon: 'bi-building',
            bi_icon_active: 'bi-building-fill',
            exact: false },

      ];
        this.sidebar_items.push({name: 'Dashboard',
                                 link: '/accounting',
                                 bi_icon: 'bi-house',
                                 bi_icon_active: 'bi-house-door-fill',
                                 exact: true });
      this.sidebar_items.push({name: 'Purchase Requests',
                               link: '/accounting/purchase-requests' ,
                               bi_icon: 'bi-clipboard-minus',
                               bi_icon_active: 'bi-clipboard-minus-fill',
                               exact: false,
                               items: po_items});
      this.sidebar_items.push({name: 'Clients',
                               link: '/accounting/clients' ,
                               bi_icon: 'bi-building',
                               bi_icon_active: 'bi-building-fill',
                               exact: false });
    }
}
