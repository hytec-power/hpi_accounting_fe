import { Component } from '@angular/core';
import {SidebarComponent, SidebarItem} from "src/app/common/templates/sidebar/sidebar.component";
import {HeaderComponent} from "src/app/common/templates/header/header.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'admin-template',
  imports: [
    HeaderComponent,
    RouterOutlet,
    SidebarComponent
  ],
  templateUrl: './template.component.html',
  styleUrl: './template.component.scss'
})
export class AdminTemplateComponent {
  sidebar_items: SidebarItem[]=[];
  constructor() {
    this.initSidebar();
  }
  initSidebar() {
    const po_items: SidebarItem[] = [
      {name: 'Purchase Requests', link: '/fae/purchase-orders/pr' , bi_icon: 'bi-building', bi_icon_active: 'bi-building-fill', exact: false },
      {name: 'Purchase Orders', link: '/fae/purchase-orders/po' , bi_icon: 'bi-building', bi_icon_active: 'bi-building-fill', exact: false },
    ];
    this.sidebar_items.push({name: 'Dashboard',
      link: '/fae',
      bi_icon: 'bi-house',
      bi_icon_active: 'bi-house-door-fill',
      exact: true });

    this.sidebar_items.push({name: 'Purchase Orders',
      link: '/fae/purchase-orders' ,
      bi_icon: 'bi-clipboard-minus',
      bi_icon_active: 'bi-clipboard-minus-fill',
      exact: false,
      items: po_items});


  }
}
