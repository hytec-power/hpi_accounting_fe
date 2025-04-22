import {Component, ElementRef, viewChild} from '@angular/core';
import {ButtonComponent} from "src/app/common/button/button.component";
import {LoaderSpinnerComponent} from "src/app/common/loader-spinner/loader-spinner.component";

@Component({
  selector: 'client-editor',
  imports: [
    ButtonComponent,
    LoaderSpinnerComponent
  ],
  templateUrl: './client-editor.component.html',
  styleUrl: './client-editor.component.scss'
})
export class ClientEditorComponent {
  //UI
  loading: boolean = false;
  modal = viewChild.required('modal',{read: ElementRef});
  constructor() {}
  ngOnInit() {}
  open(){
    this.modal()?.nativeElement.showModal();
  }
}
