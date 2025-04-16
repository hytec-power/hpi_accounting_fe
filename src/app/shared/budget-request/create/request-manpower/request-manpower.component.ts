import {Component, output, model, ViewChild} from '@angular/core';
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
  @ViewChild(Modal) Modal!: Modal;
  receivedUsers = model<manpower[]>([]);
  search: string = '';
  onNext = output();
  onBack = output();
  filteredManpower: manpower[]= [];
  ngOnInit() {
    this.filteredManpower = this.receivedUsers();
  }
  showModal(){
    this.Modal.open();
  }
  receiveArray(data: manpower[]) {
    this.receivedUsers.set(data);
    this.filteredManpower = data;
  }
  filterManpower() {
      this.filteredManpower = this.receivedUsers().filter((p: { name: string; }) =>
        p.name.toLowerCase().includes(this.search.toLowerCase()));
  }
  onClear(event: Event){
    const input = event.target as HTMLInputElement;
    if (input.value === '') {
      this.filteredManpower = this.receivedUsers();
    }
  }

  test(){
    console.log(this.receivedUsers)
  }
}

