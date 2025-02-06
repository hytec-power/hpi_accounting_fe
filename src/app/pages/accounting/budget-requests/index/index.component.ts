import { Component } from '@angular/core';
import {PageTitleComponent} from "src/app/common/page-title/page-title.component";
import {ThemeService} from "src/app/services/service/theme/theme.service";

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
  constructor(private theme: ThemeService) {}
}
