import {Component, Input, input, model,} from '@angular/core';
import { ButtonComponent } from 'src/app/common/button/button.component';
import { CommonModule, DatePipe, NgClass } from '@angular/common';
import { BudgetRequest } from 'src/app/interfaces/budget-request';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {LoaderSpinnerComponent} from "src/app/common/loader-spinner/loader-spinner.component";
import {BudgetRequestService as EmployeeBRService} from "src/app/services/employee/budget-reqeust/budget-request.service";
import { BudgetRequestService as AccountingBRService } from "src/app/services/accounting/budget-request/budget-request.service";
import {AuthService} from "src/app/services/auth/auth.service";

@Component({
    selector: 'request-date',
    imports: [
        ButtonComponent,
        CommonModule,
        ReactiveFormsModule,
        LoaderSpinnerComponent
    ],
    templateUrl: './request-date.component.html',
    styleUrl: './request-date.component.scss'
})
export class RequestDateComponent {
    form!: FormGroup;
    isEditable:boolean = false
    loading: boolean = false;
    data = model.required<BudgetRequest>();
    api!: EmployeeBRService | AccountingBRService;
    constructor(private fb: FormBuilder,
                private auth: AuthService,
                private employeeBr: EmployeeBRService,
                private accountingBR: AccountingBRService,) {
      this.initForm();
      this.initService();
    }
    ngOnInit(){
        this.loadData();
    }
    initService(){

        console.log(this.auth.getCurrentRole());
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
    cancel(){
        this.loadData();
        this.isEditable = false;
    }
    save(){

    }
}
