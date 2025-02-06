import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {ThemeService} from "src/app/services/theme/theme.service";

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
  items:{ name: string,link: string, bi_icon?: string , bi_icon_active?: string ; exact: boolean }[] = [];
  toggle_temp: boolean = true;
  constructor(private theme: ThemeService) {
    this.items.push({name: 'Dashboard',
                     link: '/accounting',
                     bi_icon: 'bi-house',
                     bi_icon_active: 'bi-house-door-fill',
                     exact: true });

    this.items.push({name: 'Budget Request',
                     link: '/accounting/budget-requests' ,
                     bi_icon: 'bi-wallet2',
                     bi_icon_active: 'bi-wallet-fill',
                     exact: false });
  }
  test(){
      this.toggle_temp = !this.toggle_temp;
      this.theme.setTheme(this.toggle_temp?'light':'dark');
  }
}
