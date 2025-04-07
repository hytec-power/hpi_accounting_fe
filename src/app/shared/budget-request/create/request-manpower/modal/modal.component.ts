import { Component,ViewChild,ElementRef, Output, EventEmitter} from '@angular/core';
import { ButtonComponent } from "../../../../../common/button/button.component";
import { FormsModule } from '@angular/forms';
import { manpower } from './manpower';

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
  filteredManpower = [...this.manpowerList];
  activeManpower:{
    name:string
    img:string
    active:boolean
    role:string
  }[] = [];
  activeCount:{
    name:string
    img:string
    active:boolean
    role:string
  }[] = [];
  sendData() {
    this.updateActiveManpower();
    this.arrayEmitter.emit(this.activeManpower);
    this.dialogRef.nativeElement.close();
  }
  updateActiveManpower() {
    this.activeManpower = this.manpowerList.filter(skill => skill.active);
  }
  filterManpower() {
    if (!this.search || this.search.trim() === '') {
      this.filteredManpower = [...this.manpowerList];
    } else {
      this.filteredManpower = this.manpowerList.filter(p =>
        p.name.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  }
  toggleActive(name: string) {
    const item = this.manpowerList.find(p => p.name === name);
    if (item) {
      item.active = !item.active;
    this.activeCount = this.manpowerList.filter(skill => skill.active);
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
