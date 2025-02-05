import {Component, input} from '@angular/core';

@Component({
  selector: 'page-title',
  standalone: true,
  imports: [],
  templateUrl: './page-title.component.html',
  styleUrl: './page-title.component.scss'
})
export class PageTitleComponent {
  text = input<string>();
}
