import { Component } from '@angular/core';
import {PageTitleComponent} from "src/app/common/page-title/page-title.component";
import {CreateComponent as CreateRequest} from "src/app/shared/budget-request/create/create.component";

@Component({
    selector: 'app-create',
  imports: [
    PageTitleComponent,
    CreateRequest
  ],
    templateUrl: './create.component.html',
    styleUrl: './create.component.scss'
})
export class CreateComponent {

}
