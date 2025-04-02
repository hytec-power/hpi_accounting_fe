import { Component} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from 'src/app/common/button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'request-details',
  standalone: true,
  imports: [ButtonComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './request-details.component.html',
  styleUrl: './request-details.component.scss'
})
export class RequestDetailsComponent {
  
  requestForm: FormGroup;
  selected: string[] = [];
  budgetreq: string[] = [];
  checkarray: any[] = [
  'budgetreq',
  'clientVisit',
  'ocularVisit',
  'clientMeeting',
  'deliveryLocation',
  'sdpPresentation',
  'repair',
  'proposalDiscussion',
  'bidding',
  'optimizationSurvey',
  'commissioningAndInstallationASI',
  'clientProspecting',
  'eventExhibitConvention',
  'facultyImmersion',
 ]
Math: any;
formatLabel(field: string): string {
  return field
    .replace(/([a-z])([A-Z])/g, '$1 $2') 
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2') 
    .replace(/^./, str => str.toUpperCase()) 
    .split(" ") 
    .join(" "); 
}

 option: any[] = [
  'Bidding',
  'Training',
  'Event/Echibition',
  'BiddingDocuments',
  'TCP',
  'Sponsorship',
 ]
  constructor(private fb: FormBuilder) {
    this.requestForm = this.fb.group({
      budgetreq: ['', Validators.required],
      clientVisit: [false],
      ocularVisit: [false],
      clientMeeting: [false],
      deliveryLocation: [false],
      sdpPresentation: [false],
      repair: [false],
      proposalDiscussion: [false],
      bidding: [false],
      optimizationSurvey: [false],
      commissioningAndInstallationASI: [false],
      clientProspecting: [false],
      eventExhibitConvention: [false],
      facultyImmersion:[false],
    });
  }
  onaddvalue(event: any, name: string) {
    if (event.target.checked) {
      if (!this.selected.includes(name)) {
        this.selected.push(name);
      }
    } else {
      this.selected = this.selected.filter(item => item !== name);
    }
  }
  budgetreqs(event: any) {
    const selectvalue = event.target.value;
    if(selectvalue && !this.budgetreq.includes(selectvalue)){
      this.budgetreq.push(selectvalue);
    }
  }
  isAnyCheckboxChecked(): boolean {
    return Object.values(this.selected).length > 0;
  }
  isBudgetReqSelected(): boolean {
    return this.requestForm.controls['budgetreq'].valid;
  } 
  canProceed(): boolean {
    return this.isBudgetReqSelected() && this.selected.length >= 1;
  }
  Submit() {
    console.log('Selected Values:', this.selected, 'selected type of budget req:', this.budgetreq);
  }
}
