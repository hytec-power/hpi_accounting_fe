import {Component, input, model, output} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ButtonComponent} from "src/app/common/button/button.component";

@Component({
  selector: 'pr-request-details',
  imports: [
    ButtonComponent,
    ReactiveFormsModule
  ],
  templateUrl: './request-details.component.html',
  styleUrl: './request-details.component.scss'
})
export class RequestDetailsComponent {

  next = output<void>();
  back = output<void>();
  form = model<FormGroup|null>();
  constructor(private formBuilder: FormBuilder) {

  }
  ngOnInit() {
    !this.form() && this.initForm();
  }
  initForm(){
    this.form.set(this.formBuilder.group({
      project_name      : ['',[Validators.required,Validators.maxLength(100)]],
      order_type        : ['regular',[Validators.required,Validators.maxLength(50)]],
      po_received_date  : ['',[Validators.required]],
      customer_po_ref   : ['',[Validators.required]],
      customer_po_amount: ['',[Validators.required]],
      quotation_ref     : ['',[Validators.required]],
      advance_pr_date   : ['',[Validators.required]],
      after_sales_date  : ['',[Validators.required]],
      inspection_days   : ['',[Validators.required]],
    }));
  }

}
