import { Component } from '@angular/core';
import { ButtonComponent } from 'src/app/common/button/button.component';
import { ModalComponent } from 'src/app/common/modal/modal.component';



@Component({
  selector: 'request-manpower',
  imports: [
    ButtonComponent,
    ModalComponent
  ],
  templateUrl: './request-manpower.component.html',
  styleUrl: './request-manpower.component.scss'
})
export class RequestManpowerComponent {
  showModal = false;
  showModal2 = false;


  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  goToNextModal(){
    this.showModal = false
    this.showModal2 = true
  }

  goToPrevModal(){
    this.showModal2 = false
    this.showModal = true
  }

  closeModal2(){
    this.showModal2 = false
  }
}
