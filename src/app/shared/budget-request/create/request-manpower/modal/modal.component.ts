import { Component,ViewChild,ElementRef, Output, EventEmitter, model} from '@angular/core';
import { ButtonComponent } from "../../../../../common/button/button.component";
import { FormsModule } from '@angular/forms';
import { manpower } from 'src/app/interfaces/request-manpower';
import { HpiUser } from 'src/app/interfaces/hpi-user';
import { BudgetRequestService } from 'src/app/services/employee/budget-reqeust/budget-request.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-test',
  imports: [
    ButtonComponent,
    FormsModule,
    CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Output() arrayEmitter = new EventEmitter<HpiUser[]>();
  @ViewChild('modal') dialogRef!: ElementRef<HTMLDialogElement>;
  employeesList: HpiUser[]=[];
  search: string = '';
  activeManpower = model<HpiUser[]>([]);
  filteredManpower: HpiUser[] = [];
  updatedManpower: HpiUser [] = [];
  activeCount:HpiUser[] = [];
  constructor(private brApi: BudgetRequestService){
    this.employeeFetch();
  }
  ngOnInit(){ 
    this.updatedManpower = [...this.activeManpower()]
  }
  sendData() {
    this.updateActiveManpower();
    this.arrayEmitter.emit(this.activeManpower());
    this.dialogRef.nativeElement.close();
  }
  updateActiveManpower() {
    this.activeManpower.set([...this.updatedManpower]);
  }
  filterManpower() {
    this.filteredManpower = this.employeesList.filter(p =>(`${p?.firstname} ${p?.middlename ? p.middlename+ ' ': ''} ${p?.lastname}`
    ).toLowerCase().includes(this.search.toLowerCase()));
  }
  toggleActive(uuid: string) {
    const employeeIndex = this.updatedManpower.findIndex(p => p.uuid === uuid);
      if (employeeIndex > -1) {
        this.updatedManpower.splice(employeeIndex, 1)
      } else{
        const employee = this.employeesList.find(e => e.uuid === uuid)
        if (employee){
          this.updatedManpower.push(employee)
        }
      }
  }
  onClear(event: Event){
  const input = event.target as HTMLInputElement;
  if (input.value === '') {
    this.filteredManpower = [...this.employeesList];}
  }
  open(){
    this.search = '';
    this.filterManpower();
    this.dialogRef.nativeElement.showModal();
  }
  close(){
    this.dialogRef.nativeElement.close();
  }
  employeeFetch(){
    this.brApi.employees().subscribe(res=> this.employeesList = res)
  }
  isActive(uuid: string):boolean{
    return this.updatedManpower.some(e => e.uuid === uuid)
  }
}
