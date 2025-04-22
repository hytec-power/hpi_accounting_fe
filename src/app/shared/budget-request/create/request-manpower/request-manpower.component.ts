import {Component, output, model, ViewChild} from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ButtonComponent } from 'src/app/common/button/button.component';
import { CommonModule } from '@angular/common';
import { ModalComponent as Modal } from './modal/modal.component';
import { HpiUser } from 'src/app/interfaces/hpi-user';
import {BudgetRequestService} from "src/app/services/employee/budget-reqeust/budget-request.service";
import { LoaderBouncingBallsComponent } from 'src/app/common/loader-bouncing-balls/loader-bouncing-balls.component';

@Component({
  selector: 'request-manpower',
  imports: [
    ButtonComponent,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    Modal,
    LoaderBouncingBallsComponent],
  templateUrl: './request-manpower.component.html',
  styleUrl: './request-manpower.component.scss'
})

export class RequestManpowerComponent {
  @ViewChild(Modal) Modal!: Modal;
  loading: boolean = true;
  receivedUsers = model<HpiUser[]>([]);
  search: string = '';
  onNext = output();
  onBack = output();
  filteredManpower: HpiUser[]= [];
  employees: HpiUser[] = [];
  constructor(public brApi: BudgetRequestService) {
  }
  ngOnInit() {
    this.filteredManpower = [...this.receivedUsers()];
    this.fetchEmployees();
  }
  fetchEmployees(){
    this.brApi.employees()
        .subscribe({
          next: data => this.employees = data,
          complete: () => this.loading = false
        })
  }
  showModal(){
    this.Modal.open();
  }
  receiveArray(data: HpiUser[]) {
    this.receivedUsers.set(data);
    this.filteredManpower = data;
  }
  filterManpower() {
    this.filteredManpower = this.receivedUsers().filter(p =>(`${p.firstname} ${p.middlename ? p.middlename +  ' ': ''} ${p.lastname}`
    ).toLowerCase().includes(this.search.toLowerCase()));
  }
  onClear(event: Event){
    const input = event.target as HTMLInputElement;
    if (input.value === '') {
      this.filteredManpower = [...this.receivedUsers()];
    }
  }
  test(){
    console.log(this.receivedUsers)
  }
}

