import {Component, ElementRef, viewChild} from '@angular/core';
import {ButtonComponent} from "src/app/common/button/button.component";
import {LoaderSpinnerComponent} from "src/app/common/loader-spinner/loader-spinner.component";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'client-editor',
  imports: [
    ButtonComponent,
    LoaderSpinnerComponent,
    ReactiveFormsModule
  ],
  templateUrl: './client-editor.component.html',
  styleUrl: './client-editor.component.scss'
})
export class ClientEditorComponent {
  //UI
  loading: boolean = false;
  modal = viewChild.required('modal',{read: ElementRef});
  //DATA
  form!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.initForm();
  }
  ngOnInit() {
  }
  initForm(){
    this.form = this.fb.group({
      'category': ['',[Validators.required]],
      'name':     ['',[Validators.required,Validators.maxLength(255)]],
      'address':  ['',[Validators.maxLength(512)]],
    });
  }
  open(){
    this.modal()?.nativeElement.showModal();
  }
}
