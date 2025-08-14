import {Component, WritableSignal} from '@angular/core';
import {ToastService} from "src/app/services/common/toast/toast.service";
import {TitleCasePipe} from "@angular/common";
import {LoaderSpinnerComponent} from "src/app/common/loader-spinner/loader-spinner.component";

@Component({
  selector: 'toast',
  imports: [
    TitleCasePipe,
    LoaderSpinnerComponent
  ],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent {
  items!: WritableSignal<ToastItem[]>;
  constructor(public toast: ToastService) {
    this.items = toast.getItems();
  }
}
export interface ToastItem {
  style: 'success'|'warning'|'error'|'info'|'loading',
  type: 'static'|'timed',
  message: string,
  time: number,
  elapsed: number
}

