import { Component } from '@angular/core';
import {ButtonComponent} from "src/app/common/button/button.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-index',
  imports: [
    ButtonComponent,
    RouterLink
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class POIndexComponent {

}
