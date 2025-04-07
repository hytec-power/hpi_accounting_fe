import {Component, output, ViewChild} from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ButtonComponent } from 'src/app/common/button/button.component';
import { CommonModule } from '@angular/common';
import { ModalComponent as Modaltest } from './modal/modal.component';
import { manpower } from './modal/manpower';

@Component({
  selector: 'request-manpower',
  imports: [
    ButtonComponent,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    Modaltest],
  templateUrl: './request-manpower.component.html',
  styleUrl: './request-manpower.component.scss'
})

export class RequestManpowerComponent {
  receivedUsers: manpower[] = [];
  search2: string = '';
  onNext = output();
  onBack = output();
  filteredManpower2 = [...this.receivedUsers];
  @ViewChild(Modaltest) dialogChild!: Modaltest;
  showModaltest(){
    this.dialogChild.open();
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
  clearSearch(){
    this.search2 = '';
    if(this.search2.trim() === ''){
      this.filterManpower2;
      console.log('saerch value', this.search2);
    }
  }
  test(){
    console.log(this.receivedUsers)
  }
}

