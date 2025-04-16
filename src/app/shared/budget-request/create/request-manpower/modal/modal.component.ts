import { Component,ViewChild,ElementRef, Output, EventEmitter, model} from '@angular/core';
import { ButtonComponent } from "../../../../../common/button/button.component";
import { FormsModule } from '@angular/forms';
import { manpower } from 'src/app/interfaces/request-manpower';

@Component({
  selector: 'app-modal-test',
  imports: [
    ButtonComponent,
    FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Output() arrayEmitter = new EventEmitter<manpower[]>();
  @ViewChild('modal') dialogRef!: ElementRef<HTMLDialogElement>;
  manpowerList:  manpower[] = [
    {name: "James Richard Gomez", img:'assets/images/common/defaults/default_user.png',active:false, role: 'Manager'},
    {name: "Ricardo De Leon ", img:'assets/images/common/defaults/default_user.png',active:false, role: 'Front-end Developer'},
    {name: "Arthur Lionheart", img:'assets/images/common/defaults/default_user.png',active:false, role: 'Back-end Developer'},
    {name: "Julius Caesar ", img:'assets/images/common/defaults/default_user.png',active:false, role: 'Supervisor'},
    {name: "Napoleon Bonaparte", img:'assets/images/common/defaults/default_user.png',active:false, role: 'Manager'},
    {name: "Genghis Khan", img:'assets/images/common/defaults/default_user.png',active:false, role: 'Manager'},
    {name: "Alexander Macedon", img:'assets/images/common/defaults/default_user.png',active:false, role: 'Manager'},
    {name: "Ahabram Limcoln", img:'assets/images/common/defaults/default_user.png',active:false, role: 'Manager'},
    {name: "Musashi Miyamoto", img:'assets/images/common/defaults/default_user.png',active:false, role: 'Manager'},
    {name: "Richard Albert James", img:'assets/images/common/defaults/default_user.png',active:false, role: 'Manager'},
    {name: "Bob Robbert", img:'assets/images/common/defaults/default_user.png',active:false, role: 'Manager'},
    {name: "Ed Neddard", img:'assets/images/common/defaults/default_user.png',active:false, role: 'Manager'},
    {name: "James Baxter", img:'assets/images/common/defaults/default_user.png',active:false, role: 'Manager'},
  ]
  search: string = '';
  activeManpower = model<manpower[]>([]);
  filteredManpower: manpower[] = [];
  updatedManpower: manpower [] = [];
  activeCount:{
    name:string
    img:string
    active:boolean
    role:string
  }[] = [];



  ngOnInit(){  
    this.updatedManpower = this.manpowerList.map(person => {
    const updated = this.activeManpower().find(p => p.name === person.name);
    if (updated) {
        return { ...person, active: updated.active };
      }
      return person;
    });
    this.filteredManpower = this.updatedManpower;
  }
  
  sendData() {
    this.updateActiveManpower();
    this.arrayEmitter.emit(this.activeManpower());
    this.dialogRef.nativeElement.close();
  }
  updateActiveManpower() {
    this.activeManpower.set(this.updatedManpower.filter(skill => skill.active));
  }
  filterManpower() {
    this.filteredManpower = this.updatedManpower.filter(p =>
      p.name.toLowerCase().includes(this.search.toLowerCase()));
  }
  toggleActive(name: string) {
    const item = this.updatedManpower.find(p => p.name === name);
    if (item) {
      item.active = !item.active;
    this.activeCount = this.updatedManpower.filter(skill => skill.active);
    }
  }
  onClear(event: Event){
  const input = event.target as HTMLInputElement;
  if (input.value === '') {
    this.filteredManpower = [...this.updatedManpower];
  }
  }
  open(){
    this.search = '';
    this.filterManpower();
    this.dialogRef.nativeElement.showModal();
  }
  close(){
    this.dialogRef.nativeElement.close();
  }
}
