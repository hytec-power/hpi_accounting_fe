import { Component, Input, input, } from '@angular/core';
import { ButtonComponent } from 'src/app/common/button/button.component';
import { CommonModule, DatePipe, NgClass } from '@angular/common';
import { BudgetRequest } from 'src/app/interfaces/budget-request';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
    selector: 'request-date',
    imports: [
        ButtonComponent,
        NgClass,
        CommonModule,
        ReactiveFormsModule
    ],
    templateUrl: './request-date.component.html',
    styleUrl: './request-date.component.scss'
})
export class RequestDateComponent {
    form = input.required<FormGroup>();
    isEditable:boolean = false

    toggleEdit(){
        this.isEditable = !this.isEditable
    }

    constructor() {}
}
