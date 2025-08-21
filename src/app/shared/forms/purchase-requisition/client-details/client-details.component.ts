import {Component, input, model, output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ButtonComponent} from "src/app/common/button/button.component";

@Component({
  selector: 'pr-client-details',
  imports: [
    ButtonComponent
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

  }
}
