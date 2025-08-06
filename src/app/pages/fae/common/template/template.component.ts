import { Component } from '@angular/core';
import {SidebarComponent, SidebarItem} from "src/app/common/templates/sidebar/sidebar.component";
import {HeaderComponent} from "src/app/common/templates/header/header.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-template',
  imports: [
    HeaderComponent,
    RouterOutlet,
    SidebarComponent
  ],
  templateUrl: './template.component.html',
  styleUrl: './template.component.scss'
})
export class FaeTemplateComponent {
  sidebar_items: SidebarItem[]=[];
  constructor() {
    this.initSidebar();
  }
  initSidebar() {

    this.sidebar_items.push({name: 'Dashboard',
                             link: '/fae',
                             bi_icon: 'bi-house',
                             bi_icon_active: 'bi-house-door-fill',
                             exact: true });



    this.sidebar_items.push({name: 'Purchase Orders',
                             link: '/fae/purchase-orders' ,
                             bi_icon: 'bi-clipboard-minus',
                             bi_icon_active: 'bi-clipboard-minus-fill',
                             exact: false });


  }
}
