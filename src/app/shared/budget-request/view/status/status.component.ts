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
} 