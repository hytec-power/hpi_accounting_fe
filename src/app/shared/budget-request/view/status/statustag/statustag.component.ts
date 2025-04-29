import { CommonModule } from '@angular/common';
import { Component, ElementRef, viewChild } from '@angular/core';
@Component({
  selector: 'app-statustag',
  imports: [CommonModule],
  templateUrl: './statustag.component.html',
  styleUrl: './statustag.component.scss'
})
export class StatustagComponent {
  modalstatus = viewChild.required('modalstatus',{read: ElementRef});
  data = [
    {tags:'For Accounting Reviewal',information: 'For review of the Accounting Personnel.'},
    {tags:'For Accounting Compliance',information: 'Subject to completion of lacking details from Accounting.'},
    {tags:'For TSM Reviewal',information: 'For review of the TSM.'},
    {tags:'For TSM Compliance',information: 'Subject to completion of lacking details from TSM..'},
    {tags:'Final Compliance',information: 'Subject to completion of lacking details from Final Approvers.'},
    {tags:'For Final Reviewal',information: 'For review of the Final Approvers.'},
    {tags:'Accounting Approved',information: 'The request has been approved by the Accounting.'},
    {tags:'Division Approved',information: 'The request has been approved by the Division.'},
    {tags:'Final Approved',information: 'The request has been approved by the Final Approvers.'},
    {tags:'For Releasing',information: 'Budget is ready for disbursement.'},
    {tags:'For Proof Compliance',information: 'Subject is to completion of lacking Proof of Release details.'},
    {tags:'For Liquidation',information: 'The request is under liquidation.'},
    {tags:'Accounting Disapproved',information: 'The request has been disaproved by the Accounting'},
    {tags:'Division Disapproved',information: 'The request has been disaproved by the Division.'},
    {tags:'Final Disapproved',information: 'The request has been disaproved by the Final Approver.'},
    {tags:'Canceled',information: 'The application was cancelled by the requester.'},
    {tags:'Completed',information: 'The process of budget request has been completed.'},
  ]
  open(){
    this.modalstatus()?.nativeElement.showModal();
  }
  close(){
    this.modalstatus()?.nativeElement.close();
  }
  getTags(tag: string){
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
      case tag.includes('Canceled'):
      return 'cancel'
    }
    return ''
  }
}
