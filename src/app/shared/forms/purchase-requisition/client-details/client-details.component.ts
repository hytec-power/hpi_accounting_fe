import {Component, input, model, output} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ButtonComponent} from "src/app/common/button/button.component";

@Component({
  selector: 'pr-client-details',
  imports: [
    ButtonComponent,
    ReactiveFormsModule
  ],
  templateUrl: './client-details.component.html',
  styleUrl: './client-details.component.scss'
})
export class ClientDetailsComponent {
  next = output<void>();
  back = output<void>();
  form = model<FormGroup|null>();
  constructor(private fb: FormBuilder) {

  }
  ngOnInit(){
    !this.form() && this.initForm()
  }
  initForm(){
    this.form.set(this.fb.group({
      company: ['',[Validators.required]],
      client_address: ['',[Validators.required]],
      contact_person: ['',[Validators.required]],
      client_position: ['',[Validators.required]],
      contact_number: ['',[Validators.required]],
      email: ['',[Validators.required]],
    }));
  }
}
