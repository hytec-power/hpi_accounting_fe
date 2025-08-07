import { Component } from '@angular/core';
import {PageTitleComponent} from "src/app/common/page-title/page-title.component";
import {PurchaseRequisitionComponent} from "src/app/shared/forms/purchase-requisition/purchase-requisition.component";

@Component({
  selector: 'app-create',
  imports: [
    PageTitleComponent,
    PurchaseRequisitionComponent
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {

}
