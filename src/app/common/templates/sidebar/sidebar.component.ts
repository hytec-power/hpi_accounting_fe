import {Component, input} from '@angular/core';
import {ThemeService} from "src/app/services/theme/theme.service";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'common-sidebar',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  items = input<SidebarItem[]>([]);
  toggle_temp: boolean = true;
  constructor(private theme: ThemeService) {

  }
  test(){
    this.toggle_temp = !this.toggle_temp;
    this.theme.setTheme(this.toggle_temp?'light':'dark');
  }
}
export interface SidebarItem {
  name: string,
  link: string,
  bi_icon?: string ,
  bi_icon_active?: string ;
  exact: boolean;
}