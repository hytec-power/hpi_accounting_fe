import { Component } from '@angular/core';
import {PageTitleComponent} from "src/app/common/page-title/page-title.component";
import {RouterLink} from "@angular/router";
import {ButtonComponent} from "src/app/common/button/button.component";

@Component({
    selector: 'app-index',
    imports: [
        PageTitleComponent,
        RouterLink,
        ButtonComponent
    ],
    templateUrl: './index.component.html',
    styleUrl: './index.component.scss'
})
export class IndexComponent {

}
