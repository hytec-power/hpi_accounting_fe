import { Component } from '@angular/core';
import { ButtonComponent } from 'src/app/common/button/button.component';
import { DatePipe, NgClass } from '@angular/common';
@Component({
    selector: 'request-date',
    imports: [
        ButtonComponent,
        NgClass,
    ],
    templateUrl: './request-date.component.html',
    styleUrl: './request-date.component.scss'
})
export class RequestDateComponent {
    isEditable:boolean = false
    today: string = '2024-02-02';

    toggleEdit(){
        this.isEditable = !this.isEditable
    }
}
