import { Component, input } from '@angular/core';
import { ButtonComponent } from 'src/app/common/button/button.component';
import { CommonModule, DatePipe, NgClass } from '@angular/common';
import { BudgetRequest } from 'src/app/interfaces/budget-request';
@Component({
    selector: 'request-date',
    imports: [
        ButtonComponent,
        NgClass,
        CommonModule
    ],
    templateUrl: './request-date.component.html',
    styleUrl: './request-date.component.scss'
})
export class RequestDateComponent {
    isEditable:boolean = false
    record = input.required<BudgetRequest>();

    toggleEdit(){
        this.isEditable = !this.isEditable
    }

    constructor() {}
    ngOnInit() {
        console.log(this.record())
    }
}
