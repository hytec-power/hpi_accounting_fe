import {Component, input} from '@angular/core';

@Component({
    selector: 'page-title',
    imports: [],
    templateUrl: './page-title.component.html',
    styleUrl: './page-title.component.scss'
})
export class PageTitleComponent {
  text = input<string>();
  bi_icon = input<string>('');
}
