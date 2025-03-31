import { CommonModule, formatCurrency } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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



  
  dateForm: FormGroup;

  constructor(){
    this.dateForm = new FormGroup({
      date: new FormControl('',[Validators.required]),
      time: new FormControl('',[Validators.required, Validators.minLength(5)]),
      util: new FormControl('',[Validators.required, Validators.minLength(4)])
    })
  }

  onSubmit(){
    if(this.dateForm.valid){
      const formData = this.dateForm.value;
      console.log('Stored Data:', formData);
    }
  }

}
