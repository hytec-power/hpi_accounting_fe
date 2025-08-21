import {Component, ElementRef, output, viewChild} from '@angular/core';
import {NewUser} from "src/app/pages/admin/users/index/index.component";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ButtonComponent} from "src/app/common/button/button.component";
import {User} from "src/app/interfaces/user";

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
  update = output<string>();
  form!: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.initForm();
  }
  initForm(){
    this.form = this.formBuilder.group({
      email: ['',[Validators.required,
                  Validators.pattern('^.+@hytecpower\\.com$')]],
      role: ['',[Validators.required]],
    });
    this.form.controls['email'].disable();
  }
  ngOnInit() {

  }
  public edit(user: User){
    this.modal()?.nativeElement.showModal();
    this.form.controls['email'].setValue(user.email);
    this.form.controls['role'].setValue(user.role?.name);
  }
  dismiss(){
    this.modal()?.nativeElement.close();
  }
  save(){
    this.update.emit(this.form.controls['role'].value);
    this.dismiss();
  }
}
