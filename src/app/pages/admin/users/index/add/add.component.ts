import {Component, ElementRef, viewChild} from '@angular/core';
import {ButtonComponent} from "src/app/common/button/button.component";

@Component({
  selector: 'add-user',
  imports: [
    ButtonComponent
  ],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddComponent {
  modal = viewChild.required<ElementRef>('modal');
  constructor() {
  }
  ngOnInit() {
    this.open();
  }
  open(){
    this.modal()?.nativeElement.showModal();

  }
}
