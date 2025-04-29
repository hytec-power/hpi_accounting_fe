import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from "../../../../../common/button/button.component";
import { LoaderSpinnerComponent } from "../../../../../common/loader-spinner/loader-spinner.component";
import { StatustagComponent } from "../statustag/statustag.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-changestatus',
  imports: [ButtonComponent, LoaderSpinnerComponent, StatustagComponent, CommonModule],
  templateUrl: './changestatus.component.html',
  styleUrl: './changestatus.component.scss'
})
export class ChangestatusComponent {
loading = false;
modal = viewChild.required('modal',{read: ElementRef});
modalstatus  = viewChild.required('modalstatus', {read: StatustagComponent})
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

  tags(tag: string){
    if(!tag) return'';
    switch(true){
      case tag.includes('Approved'):
      return 'tag-aprroved';
      case tag.includes('Reviewal'):
      return 'for-reviewal'
      case tag.includes('Liquidation'):
      return 'for-liquidation'
      case tag.includes('Disapproved'):
      return 'disaproved'
      case tag.includes('Completed'):
      return 'completed'
      case tag.includes('Releasing'):
      return 'for-release'
    }
    return ''
  }
}


