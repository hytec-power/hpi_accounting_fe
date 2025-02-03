import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountingRoutes } from "src/app/pages/accounting/routes";
import { RouterModule } from "@angular/router";


@NgModule({
  declarations: [],
  imports: [CommonModule,RouterModule.forChild(AccountingRoutes)]
})
export class AccountingModule { }
