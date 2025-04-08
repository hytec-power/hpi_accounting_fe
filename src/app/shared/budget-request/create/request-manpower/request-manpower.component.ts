import {Component, output, ViewChild} from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ButtonComponent } from 'src/app/common/button/button.component';
import { CommonModule } from '@angular/common';
import { ModalComponent as Modal } from './modal/modal.component';
import { manpower } from 'src/app/interfaces/request-manpower';

@Component({
  selector: 'request-manpower',
  imports: [
    ButtonComponent,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    Modal],
  templateUrl: './request-manpower.component.html',
  styleUrl: './request-manpower.component.scss'
})

export class RequestManpowerComponent {
  receivedUsers: manpower[] = [];
  search2: string = '';
  onNext = output();
  onBack = output();
  filteredManpower2 = [...this.receivedUsers];
  @ViewChild(Modal) Modal!: Modal;
  showModal(){
    this.Modal.open();
  }
  receiveArray(data: manpower[]) {
    this.receivedUsers = data;
    this.filteredManpower2 = data;
    console.log('Received users:', this.receivedUsers);
    console.log(this.filteredManpower2)
  }
  filterManpower2() {
    if (!this.search2 || this.search2.trim() === '') {
      this.filteredManpower2 = [...this.receivedUsers];
    } else {
      this.filteredManpower2 = this.receivedUsers.filter((p: { name: string; }) =>
        p.name.toLowerCase().includes(this.search2.toLowerCase())
      );
    }
  }
  clear(event: Event){
    const input = event.target as HTMLInputElement;
    if (input.value === '') {
      this.filteredManpower2 = [...this.receivedUsers];
    }
  }
  test(){
    console.log(this.receivedUsers)
  }
}

