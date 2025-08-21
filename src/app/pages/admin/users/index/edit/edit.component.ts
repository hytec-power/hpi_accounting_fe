import {Component, ElementRef, output, viewChild} from '@angular/core';
import {NewUser} from "src/app/pages/admin/users/index/index.component";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ButtonComponent} from "src/app/common/button/button.component";
import {User} from "src/app/interfaces/user";
import {LoaderSpinnerComponent} from "src/app/common/loader-spinner/loader-spinner.component";
import {AccountsService} from "src/app/services/sysad/accounts.service";

@Component({
  selector: 'edit-user',
  imports: [
    ButtonComponent,
    ReactiveFormsModule,
    LoaderSpinnerComponent
  ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent {
  modal = viewChild.required<ElementRef>('modal');
  onUpdate = output<void>();
  form!: FormGroup;
  loading = false;
  record: User|null = null;
  constructor(private formBuilder: FormBuilder,
              private accountsApi: AccountsService) {
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
  apiSave(){
    this.loading = true;
    const role = this.form.controls['role'].value;
    this.accountsApi.update(this.record!.uuid, role)
        .subscribe({complete: () => this.onSuccess()});
  }
  public edit(user: User){
    this.record = user;
    this.modal()?.nativeElement.showModal();
    this.form.controls['email'].setValue(user.email);
    this.form.controls['role'].setValue(user.role?.name);
  }
  dismiss(){
    this.modal()?.nativeElement.close();
  }
  isValid(){
    return this.form.controls['role'].value != this.record?.role?.name;
  }
  onSuccess(){
    this.loading = false;
    this.onUpdate.emit();
    this.dismiss();
  }
}
