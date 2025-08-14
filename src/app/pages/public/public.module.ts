import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutes } from "src/app/pages/public/routes";
import { RouterModule } from "@angular/router";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(PublicRoutes)
  ]
})
export class PublicModule { }
