import {Component, input, model, output} from '@angular/core';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';
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
  form = input.required<FormGroup>()
  purpose = model<string[]>([]);
  onNext = output();
  request_purpose: string[]=[
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
  request_types: string[] = [ 'Bidding', 'Training', 'Event/Exhibition', 'Bidding Documents', 'TCP', 'Sponsorship'];
  constructor() {}
  toggleSelection(event: any,value: string) {

    event.target.checked ? this.add(value): this.remove(value);
  }
  add(item:string) {
    !this.purpose().includes(item) && this.purpose.update( i => [...i,item]);
  }
  remove(item:string) {
    this.purpose.update( i => i.filter(a => a!==item));
  }
  isComplete(){
    return this.form().valid && this.purpose().length > 0;
  }
}
