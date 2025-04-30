import { Component, input, model, ViewChild } from '@angular/core';
import { ButtonComponent } from 'src/app/common/button/button.component';
import { NgClass } from '@angular/common';
import { HpiUser } from 'src/app/interfaces/hpi-user';
import { ModalComponent } from '../../create/request-manpower/modal/modal.component';
import { BudgetRequestService } from 'src/app/services/employee/budget-reqeust/budget-request.service';
import { update } from 'lodash';
@Component({
  selector: 'request-manpower',
  imports: [
    ButtonComponent,
    NgClass,
    ModalComponent
  ],
  templateUrl: './request-manpower.component.html',
  styleUrl: './request-manpower.component.scss'
})
export class RequestManpowerComponent {
  @ViewChild(ModalComponent) Modal!: ModalComponent;
  isEditable:boolean = false
  fetchedArray: HpiUser[] = []
  linkedArray: HpiUser[] = []
  manpowerList = input.required<HpiUser[]>();
  receivedEmployees: HpiUser[] = []

  constructor(public brApi: BudgetRequestService) {
    this.fetchEmployees();
    
  }

  fetchEmployees(){
    this.brApi.employees()
        .subscribe({
          next: data => this.fetchedArray = data,
        })
  }
  updateEmployees(){
    this.linkedArray = [...this.fetchedArray.filter( e => !this.manpowerList().some(e2 => e.uuid === e2.uuid))]
  }
  toggleEdit(){
    this.updateEmployees();
    this.isEditable = !this.isEditable
  }
  receiveArray(data: HpiUser[]) {
    this.manpowerList().push(...data)
    this.updateEmployees();
    this.Modal.clearSelected();
  }
  removeEmployee(uuid: string){
    const empIndex = this.manpowerList().findIndex( f => f.uuid === uuid)
    this.manpowerList().splice(empIndex, 1)
    this.updateEmployees();
  }
  addManpower(){
    this.toggleEdit()
  }
  showModal(){
    console.log(this.manpowerList());
    
    this.receivedEmployees = (this.linkedArray)
    this.Modal.open();
  }


}
