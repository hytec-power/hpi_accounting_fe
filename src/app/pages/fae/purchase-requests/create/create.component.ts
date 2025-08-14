import { Component } from '@angular/core';
import {PageTitleComponent} from "src/app/common/page-title/page-title.component";
import {PurchaseRequisitionComponent} from "src/app/shared/forms/purchase-requisition/purchase-requisition.component";
import {Router} from "@angular/router";

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
  constructor(private router: Router) {}
  back(){
    this.router.navigate(['/fae/purchase-orders/pr']);
  }
}
