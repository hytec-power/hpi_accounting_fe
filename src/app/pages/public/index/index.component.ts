import { Component } from '@angular/core';
import {LoaderBouncingBallsComponent} from "src/app/common/loader-bouncing-balls/loader-bouncing-balls.component";

@Component({
    selector: 'app-index',
    imports: [
        LoaderBouncingBallsComponent
    ],
    templateUrl: './index.component.html',
    styleUrl: './index.component.scss'
})
export class IndexComponent {

}
