import {Component, ElementRef, output, viewChild} from '@angular/core';
import {NewUser} from "src/app/pages/admin/users/index/index.component";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ButtonComponent} from "src/app/common/button/button.component";

@Component({
  selector: 'edit-user',
  imports: [
    ButtonComponent,
    ReactiveFormsModule
  ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent {
  modal = viewChild.required<ElementRef>('modal');
  addUser = output<NewUser>();
  form!: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.initForm();
  }
  initForm(){
    this.form = this.formBuilder.group({
      email: ['',[Validators.required,Validators.pattern('^.+@hytecpower\\.com$')]],
      role: ['',[Validators.required]],
    });
  }
  ngOnInit() {

  }
  public open(){
    this.modal()?.nativeElement.showModal();
    this.form.reset();
  }
  dismiss(){
    this.modal()?.nativeElement.close();
  }
  save(){
    this.addUser.emit(this.form.value);
    this.dismiss();
  }
}
