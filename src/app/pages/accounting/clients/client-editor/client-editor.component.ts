import {Component, ElementRef, output, viewChild} from '@angular/core';
import {ButtonComponent} from "src/app/common/button/button.component";
import {LoaderSpinnerComponent} from "src/app/common/loader-spinner/loader-spinner.component";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ClientsService} from "src/app/services/accounting/clients/clients.service";
import {Client} from "src/app/interfaces/client";

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
  mode: "add" | "edit" = "add";
  uuid: string = '';
  //
  onCreate = output<void>();
  onUpdate = output<void>();
  onError = output<void>();
  constructor(private fb: FormBuilder,
              private clients: ClientsService) {
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
  apiCreate(payload: any){
    this.loading = true;
    this.clients.create(payload).subscribe({
      error: error => this.error(),
      complete: () => this.success()
    });
  }
  apiUpdate(uuid: string, payload: any){
    this.loading = true;
    this.clients.update(uuid,payload).subscribe({
      error: error => this.error(),
      complete: () => this.success()
    });
  }
  open(){
    this.modal()?.nativeElement.showModal();
  }
  add(){
    this.form.reset();
    this.open();
  }
  edit(client: Client){
    this.uuid = client.uuid;
    this.form.patchValue(client);
    this.mode = "edit";
    this.open();
  }
  close(){
    this.modal()?.nativeElement.close();
  }
  save(){
    const payload = this.form.getRawValue();
    this.mode == "add" ? this.apiCreate(payload) : this.apiUpdate(this.uuid,payload);
  }
  success(){
    this.mode == "add" ? this.onCreate.emit() : this.onUpdate.emit();
    this.loading = false;
    this.close()
  }
  error(){
    this.onError.emit();
    this.loading = false;
    this.close();
  }
}
