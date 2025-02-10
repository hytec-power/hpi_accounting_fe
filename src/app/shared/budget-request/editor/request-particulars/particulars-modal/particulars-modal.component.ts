import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'particulars-modal',
  standalone: true,
  imports: [],
  templateUrl: './particulars-modal.component.html',
  styleUrl: './particulars-modal.component.scss'
})
export class ParticularsModalComponent {
  @ViewChild('modal',{static: true}) modal!: ElementRef;
  constructor() {
  }
  ngOnInit(){
    console.log(this.modal);
  }
  open(){
    this.modal?.nativeElement.showModal();
  }
}
