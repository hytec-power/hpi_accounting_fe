import {Component, input, Input} from '@angular/core';


@Component({
    selector: 'button-component',
    imports: [],
    templateUrl: './button.component.html',
    styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() text: string = 'button text';
  @Input() type: 'primary'|'secondary'|'warning'| 'success' |'default' = 'default';
  @Input() bi_icon: string = '';
  @Input() bi_position: 'left'|'right' = 'left';
  @Input() disabled: boolean = false;
  @Input() width: number|null = null;
  @Input() borderRadius: string = '5px';
  constructor() {

  }

}
