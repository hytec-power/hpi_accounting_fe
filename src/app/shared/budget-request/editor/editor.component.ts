import {Component, input} from '@angular/core';

@Component({
  selector: 'budget-request-editor',
  standalone: true,
  imports: [],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss'
})
export class EditorComponent {
  item = input();
}
