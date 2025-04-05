import { Component} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
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

  purpose: string[]=[
    'Client Visit',
    'Client Meeting',
    'Sdp Presentation',
    'Proposal Discussion',
    'Optimization Survey',
    'Client Prospecting',
    'Faculty Immersion',
    'Ocular Visit',
    'Delivery Location',
    'Repair',
    'Bidding',
    'Commissioning And Installation ASI',
    'Event Exhibit Convention'
  ];
  request_types: string[] = [ 'Bidding', 'Training', 'Event/Echibition', 'Bidding Documents', 'TCP', 'Sponsorship'];
  constructor() {}
}
