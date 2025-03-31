import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from 'src/app/common/button/button.component';

@Component({
  selector: 'app-charging-details',
  imports: [ButtonComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './charging-details.component.html',
  styleUrl: './charging-details.component.scss'
})
export class ChargingDetailsComponent {
  myForm: FormGroup;

  constructor(){
    this.myForm = new FormGroup({
      title: new FormControl("" ,[Validators.required,Validators.minLength(5)]),
      school: new FormControl("",[Validators.required]),
      address: new FormControl("",[Validators.required,Validators.minLength(5)]),
      confilevel: new FormControl("",[Validators.required]),
      poamount: new FormControl("",[Validators.required]),
      ponumber: new FormControl("",[Validators.required]),

    })
  }
  onsubmit() {
    if (this.myForm.valid) {
      console.log("Form Submitted", this.myForm.value);
    } else {
      console.log("Form Invalid");
      this.myForm.markAllAsTouched(); // Ensures all errors are displayed
    }
  }
  isFormFilled(): boolean {
    return Object.values(this.myForm.value).every(value => value !== '');
  }
}
