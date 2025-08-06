import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {FaeRoutes} from "src/app/pages/fae/route";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(FaeRoutes),
  ]
})
export class FaeModule { }
