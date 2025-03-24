import {Component, Input} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
    selector: 'button-component',
    imports: [
        NgIf
    ],
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
  constructor() {

  }

}
