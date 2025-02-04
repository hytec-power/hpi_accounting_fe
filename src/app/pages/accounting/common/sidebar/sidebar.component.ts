import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'accounting-sidebar',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  items:{ name: string,link: string,bi_icon?: string }[] = [];
  constructor() {
    this.items.push({name: 'Dashboard', link: '/accounting', bi_icon: 'bi-house' });
    this.items.push({name: 'Dashboard', link: '' });

  }
}
