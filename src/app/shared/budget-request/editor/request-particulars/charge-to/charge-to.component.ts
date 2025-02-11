import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'charge-to',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './charge-to.component.html',
  styleUrl: './charge-to.component.scss'
})
export class ChargeToComponent {
  form !: FormGroup;
  constructor(private fb: FormBuilder) {
    this.initForm();
  }
  ngOnInit(){

  }
  initForm(){
    this.form = this.fb.group({
      client_name           : ['',Validators.required],
      po_quotation_reference: ['',Validators.required],
      remaining_contingency : ['',Validators.required],
      release_type          : ['',Validators.required],
    });
  }
}
