import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
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

  constructor(private check: FormBuilder) {
    this.requestForm = this.check.group({
      clientVisit: [false],
      ocularVisit: [false],
      clientMeeting: [false],
      deliveryLocation: [false],
      sdpPresentation: [false],
      repair: [false],
      proposalDiscussion: [false],
      bidding: [false],
      optimizationSurvey: [false],
      commissioning: [false],
      clientProspecting: [false],
      eventExhibit: [false],
    });
  }

  isAnyCheckboxChecked(): boolean {
    return Object.values(this.requestForm.value).some(value => value === true);
  }
}
