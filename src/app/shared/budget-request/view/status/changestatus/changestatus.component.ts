import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from "../../../../../common/button/button.component";
import { LoaderSpinnerComponent } from "../../../../../common/loader-spinner/loader-spinner.component";

@Component({
  selector: 'app-changestatus',
  imports: [ButtonComponent, LoaderSpinnerComponent],
  templateUrl: './changestatus.component.html',
  styleUrl: './changestatus.component.scss'
})
export class ChangestatusComponent {
loading = false;
modal = viewChild.required('modal',{read: ElementRef});
open(){
  this.modal()?.nativeElement.showModal();
}
close(){
  this.modal()?.nativeElement.close();
}
option: string[]=[
  'For Accounting Compliance',
  'Accounting Approved',
  'For Releasing',
  'For Proof Compliance',
  'For Proof Reviewal',
  'For Liquidation',
  'Accounting Disapproved',
  'Completed'];

  opentags(){
    
  }
}


