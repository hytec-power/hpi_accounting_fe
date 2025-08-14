import {Component, input} from '@angular/core';
import {SidebarItem} from "src/app/common/templates/sidebar/sidebar.component";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'sidebar-item',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './sidebar-item.component.html',
  styleUrl: './sidebar-item.component.scss'
})
export class SidebarItemComponent {
  item = input.required<SidebarItem>();
  preventDefault(event: any) {
    event.preventDefault();
    event.stopPropagation();
    console.log('wee');
  }
}
