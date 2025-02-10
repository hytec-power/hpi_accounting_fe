import {Component, ViewChild} from '@angular/core';
import {ButtonComponent} from "src/app/common/button/button.component";
import {CurrencyPipe} from "@angular/common";
import {
  ParticularsModalComponent
} from "src/app/shared/budget-request/editor/request-particulars/particulars-modal/particulars-modal.component";

@Component({
  selector: 'request-particulars',
  standalone: true,
  imports: [
    ButtonComponent,
    CurrencyPipe,
    ParticularsModalComponent
  ],
  templateUrl: './request-particulars.component.html',
  styleUrl: './request-particulars.component.scss'
})
export class RequestParticularsComponent {
  @ViewChild('modal',{static: true , read: ParticularsModalComponent}) modal!: ParticularsModalComponent;
  ngOnInit(){
    this.onAdd();
  }
  onAdd(){
    this.modal.open();
  }
}
