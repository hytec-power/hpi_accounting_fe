import { Component } from '@angular/core';
import {PageTitleComponent} from "src/app/common/page-title/page-title.component";
import {StepperItem} from "src/app/common/stepper/stepper.component";

import {BudgetRequestViewComponent} from "src/app/shared/budget-request/view/view.component";
import {BudgetRequest} from "src/app/interfaces/budget-request";
import {BudgetRequestService} from "src/app/services/accounting/budget-request/budget-request.service";
import {ActivatedRoute} from "@angular/router";
import {LoaderBouncingBallsComponent} from "src/app/common/loader-bouncing-balls/loader-bouncing-balls.component";


@Component({
    selector: 'view-request',
  imports: [
    PageTitleComponent,
    BudgetRequestViewComponent,
    LoaderBouncingBallsComponent,
  ],
    templateUrl: './view.component.html',
    styleUrl: './view.component.scss'
})
export class ViewComponent {
  loading: boolean = true;
  record!: BudgetRequest;
  br_uuid!: string;
  constructor(private brApi: BudgetRequestService,
              private ac: ActivatedRoute) {
    this.br_uuid = this.ac.snapshot.paramMap.get('uuid')??'';
  }
  ngOnInit() {
    this.apiFetch();
  }
  apiFetch(){
    this.loading = true;
    this.brApi.find(this.br_uuid)
        .subscribe({
          next: data => this.record = data,
          complete: () => this.loading = false
        });
  }
}
