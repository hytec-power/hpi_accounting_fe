import {Component, ElementRef, ViewChild} from '@angular/core';
import {ButtonComponent} from "src/app/common/button/button.component";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'particulars-modal',
  standalone: true,
  imports: [
    ButtonComponent,
    ReactiveFormsModule
  ],
  templateUrl: './particulars-modal.component.html',
  styleUrl: './particulars-modal.component.scss'
})
export class ParticularsModalComponent {
  @ViewChild('modal',{static: true}) modal!: ElementRef;
  form!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.initForm();

  }
  ngOnInit(){}
  initForm(){
    this.form = this.fb.group({
        type: ['',[Validators.required]],
        amount: [0,[Validators.required,
                    Validators.min(0),
                    Validators.pattern('^\\d+$'),
                    Validators.max(999999999)]],
    });
  }
  open(){
    this.modal?.nativeElement.showModal();
  }
  close(){
    this.modal.nativeElement.close();
  }
}
