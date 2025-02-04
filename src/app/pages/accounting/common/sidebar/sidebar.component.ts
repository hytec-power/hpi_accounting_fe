import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'accounting-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  items:{ name: string,link: string, bi_icon?: string , bi_icon_active?: string }[] = [];
  constructor() {
    this.items.push({name: 'Dashboard',
                     link: '/accounting',
                     bi_icon: 'bi-house',
                     bi_icon_active: 'bi-house-door-fill' });

    this.items.push({name: 'Budget Request',
                     link: '' ,
                     bi_icon: 'bi-wallet-fill' });

  }
}
