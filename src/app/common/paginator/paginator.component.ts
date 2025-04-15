import {Component, model} from '@angular/core';

@Component({
  selector: 'paginator',
  imports: [],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss'
})
export class PaginatorComponent {
  currentPage = model<number>(1);

}
