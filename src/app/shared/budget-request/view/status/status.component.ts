import { Component, input, viewChild } from '@angular/core';
import { ChangestatusComponent } from "./changestatus/changestatus.component";
import { StatustagComponent } from './statustag/statustag.component';
import { BudgetRequest } from 'src/app/interfaces/budget-request';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-status',
  imports: [ChangestatusComponent, StatustagComponent, CommonModule],
  templateUrl: './status.component.html',
  styleUrl: './status.component.scss'
})
export class StatusComponent {
  record = input.required<BudgetRequest>();

  modal = viewChild.required('editor',{read: ChangestatusComponent});
  modalstatus  = viewChild.required('modalstatus', {read: StatustagComponent})
  tags(tag: string){
    if(!tag) return'';
    switch(true){
      case tag.includes('Approved'):
      return 'tag-aprroved';
      case tag.includes('reviewal'):
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