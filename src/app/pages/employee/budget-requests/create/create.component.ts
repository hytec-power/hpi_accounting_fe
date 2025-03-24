import { Component } from '@angular/core';
import {EditorComponent} from "src/app/shared/budget-request/editor/editor.component";
import {PageTitleComponent} from "src/app/common/page-title/page-title.component";
import {CreateComponent as CreateRequest} from "../../../../shared/budget-request/create/create.component";

@Component({
    selector: 'app-create',
  imports: [
    EditorComponent,
    PageTitleComponent,
    CreateRequest
  ],
    templateUrl: './create.component.html',
    styleUrl: './create.component.scss'
})
export class CreateComponent {

}
