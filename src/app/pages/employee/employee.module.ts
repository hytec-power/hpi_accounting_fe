import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { EmployeeRoutes } from "src/app/pages/employee/route";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(EmployeeRoutes)
  ]
})
export class EmployeeModule { }
