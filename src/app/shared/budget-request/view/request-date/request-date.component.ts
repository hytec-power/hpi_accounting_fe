import {Component, Input, input, model,} from '@angular/core';
import { ButtonComponent } from 'src/app/common/button/button.component';
import { CommonModule, DatePipe, NgClass } from '@angular/common';
import { BudgetRequest } from 'src/app/interfaces/budget-request';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
@Component({
    selector: 'request-date',
    imports: [
        ButtonComponent,
        CommonModule,
        ReactiveFormsModule
    ],
    templateUrl: './request-date.component.html',
    styleUrl: './request-date.component.scss'
})
export class RequestDateComponent {
    form!: FormGroup;
    isEditable:boolean = false
    data = model.required<BudgetRequest>()
    constructor(private fb: FormBuilder) {
      this.initForm();
    }
    ngOnInit(){
        this.loadData();
    }
    initForm(){
      this.form = this.fb.group({
        date_needed: ['',Validators.required],
        time_needed: ['',Validators.required],
        date_utilization: ['',Validators.required]
      });
    }
    loadData(){
        this.form.patchValue(this.data());
    }
    toggleEdit(){
        this.isEditable = !this.isEditable
    }
}
