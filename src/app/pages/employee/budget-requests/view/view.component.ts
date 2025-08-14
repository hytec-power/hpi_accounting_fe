import { Component } from '@angular/core';
import {BudgetRequestViewComponent} from "src/app/shared/budget-request/view/view.component";
import {PageTitleComponent} from "src/app/common/page-title/page-title.component";
import {ActivatedRoute} from "@angular/router";
import {BudgetRequest} from "src/app/interfaces/budget-request";
import {BudgetRequestService} from "src/app/services/employee/budget-reqeust/budget-request.service";
import {LoaderBouncingBallsComponent} from "src/app/common/loader-bouncing-balls/loader-bouncing-balls.component";
import { HpiUser } from 'src/app/interfaces/hpi-user';

@Component({
    selector: 'app-view',
  imports: [
    BudgetRequestViewComponent,
    PageTitleComponent,
    LoaderBouncingBallsComponent
  ],
    templateUrl: './view.component.html',
    styleUrl: './view.component.scss'
})
export class ViewComponent {
  //UI
  loading: boolean = true;
  //DATA
  br_uuid!: string;
  record!: BudgetRequest;
  constructor(private brApi: BudgetRequestService,
              private ar: ActivatedRoute) {
    this.br_uuid = this.ar.snapshot.paramMap.get('uuid') ??'';
  }
  ngOnInit() {
    this.apiFetch();
  }
  apiFetch(){
    this.loading = true;
    this.brApi.find(this.br_uuid).subscribe({
      next: data => this.record = data,
      complete: () => this.loading = false,
    });
  }
}
