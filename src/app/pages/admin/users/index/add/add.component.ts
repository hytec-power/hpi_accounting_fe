import {Component, ElementRef, output, viewChild} from '@angular/core';
import {ButtonComponent} from "src/app/common/button/button.component";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NewUser} from "src/app/pages/admin/users/index/index.component";

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
