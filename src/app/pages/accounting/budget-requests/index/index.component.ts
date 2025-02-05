import { Component } from '@angular/core';
import {PageTitleComponent} from "src/app/common/page-title/page-title.component";

@Component({
  selector: 'app-index',
  standalone: true,
    imports: [
        PageTitleComponent
    ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

}
