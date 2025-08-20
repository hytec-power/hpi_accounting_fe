import {Component, ElementRef, viewChild} from '@angular/core';
import {ButtonComponent} from "src/app/common/button/button.component";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'add-user',
  imports: [
    ButtonComponent,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddComponent {
  modal = viewChild.required<ElementRef>('modal');
  form!: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.initForm();
  }
  initForm(){
    this.form = this.formBuilder.group({
      email: ['',[Validators.required]],
      role: ['',[Validators.required]],
    });
  }
  ngOnInit() {

  }
  public open(){
    this.modal()?.nativeElement.showModal();
  }
  dismiss(){
    this.modal()?.nativeElement.close();
  }
}
