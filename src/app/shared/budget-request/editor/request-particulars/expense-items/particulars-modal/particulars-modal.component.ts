import {Component, ElementRef, output, ViewChild} from '@angular/core';
import {ButtonComponent} from "src/app/common/button/button.component";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ExpenseItem} from "src/app/interfaces/expense-item";

@Component({
    selector: 'particulars-modal',
    imports: [
        ButtonComponent,
        ReactiveFormsModule
    ],
    templateUrl: './particulars-modal.component.html',
    styleUrl: './particulars-modal.component.scss'
})
export class ParticularsModalComponent {
  @ViewChild('modal',{static: true}) modal!: ElementRef;
  onAdd = output<ExpenseItem>();
  form!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.initForm();

  }
  ngOnInit(){}
  initForm(){
    this.form = this.fb.group({
        type: ['',[Validators.required]],
        amount: [0,[Validators.required,
                    Validators.min(1),
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
  addItem(){
    const item: ExpenseItem = {
        type: this.form.get('type')?.value,
        amount: this.form.get('amount')?.value
    }
    this.onAdd.emit(item);
    this.close();
  }
}
