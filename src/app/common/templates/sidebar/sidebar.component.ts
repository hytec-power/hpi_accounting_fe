import {Component, input} from '@angular/core';
import {ThemeService} from "src/app/services/theme/theme.service";
import {SidebarItemComponent} from "src/app/common/templates/sidebar/sidebar-item/sidebar-item.component";

@Component({
    selector: 'common-sidebar',
  imports: [SidebarItemComponent],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  items = input<SidebarItem[]>([]);
  constructor(private theme: ThemeService) {}
}
export interface SidebarItem {
  name: string,
  link: string,
  bi_icon?: string ,
  bi_icon_active?: string ;
  exact: boolean;
  items?: SidebarItem[];
}
