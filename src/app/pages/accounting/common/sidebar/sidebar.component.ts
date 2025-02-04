import { Component } from '@angular/core';

@Component({
  selector: 'accounting-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  links:{ name: string,link: string,bi_icon?: string }[] = [];
  constructor() {
    this.links.push({name: 'Dashboard', link: '',bi_icon: '' });
    this.links.push({name: 'Dashboard', link: '',bi_icon: '' });

  }
}
