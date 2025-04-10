import { Component } from '@angular/core';

@Component({
    selector: 'request-purpose',
    imports: [],
    templateUrl: './request-purpose.component.html',
    styleUrl: './request-purpose.component.scss'
})
export class RequestPurposeComponent {
    purpose: any = [
        'Client Visit',
        'Occular Visit',
        'Faculty Immersion',
        'Delivery',
       ]
}
