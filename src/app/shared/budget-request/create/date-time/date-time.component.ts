import { CommonModule, formatCurrency } from '@angular/common';
import {Component, input, output} from '@angular/core';
import {Form, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { ButtonComponent } from 'src/app/common/button/button.component';

@Component({
  selector: 'request-date-time',
  imports: [
    ButtonComponent,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './date-time.component.html',
  styleUrl: './date-time.component.scss'
})
export class DateTimeComponent {
  form = input.required<FormGroup>();
  onNext = output();
  onBack = output();
  constructor(){}

}
