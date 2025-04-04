import { Component,computed, signal, WritableSignal } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators, FormBuilder, AbstractControl, NgModel, FormsModule } from '@angular/forms';
import { ButtonComponent } from 'src/app/common/button/button.component';
import { ModalComponent } from 'src/app/common/modal/modal.component';
import { CommonModule, NgStyle } from '@angular/common';
import { filter } from 'rxjs';


@Component({
  selector: 'request-manpower',
  imports: [
    ButtonComponent,
    ModalComponent,
    ReactiveFormsModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './request-manpower.component.html',
  styleUrl: './request-manpower.component.scss'
})
export class RequestManpowerComponent {

  search: string = '';
  search2: string = '';

  manForm: FormGroup;

  manpowerList = [
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
  
  constructor(private fb: FormBuilder) {
    this.manForm = this.fb.group({
      activeArray: [this.activeManpower, [this.validateActiveArray]]
    });
    this.updateActiveManpower();
  }


  filteredManpower = [...this.manpowerList];
  filteredManpower2 = [...this.activeManpower];



  filterManpower() {
    if (!this.search || this.search.trim().length === 0) {
      this.filteredManpower2 = [...this.activeManpower];
      return
    } else {
      this.filteredManpower = this.manpowerList.filter(p =>
        p.name.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  }

  filterManpower2() {
    if (!this.search2 || this.search2.trim().length === 0) {
      this.filteredManpower2 = [...this.manForm.controls['activeArray'].value];
    } else {
      this.filteredManpower2 = this.manForm.controls['activeArray'].value.filter((p: { name: string; }) =>
        p.name.toLowerCase().includes(this.search2.toLowerCase())
      );
    }
  }

  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Backspace' || event.key === 'Delete') {
      this.filteredManpower = this.manpowerList.filter(p =>
        p.name.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  }


  validateActiveArray(control: AbstractControl) {
    return control.value.length > 0 ? null : { noActiveArray: true };
  }

  toggleActive(name: string) { 
    const item = this.manpowerList.find(p => p.name === name);
    if (item) {
      item.active = !item.active;
    this.activeCount = this.manpowerList.filter(skill => skill.active);
    }
  }

  updateActiveManpower() {
    this.activeManpower = this.manpowerList.filter(skill => skill.active);
    this.manForm.controls['activeArray'].setValue(this.activeManpower);
    this.manForm.controls['activeArray'].updateValueAndValidity();
  }

  showModal = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.search = ''
    this.filteredManpower = [...this.manpowerList]; 
  }

  save(){
    this.updateActiveManpower();
    this.showModal = false;
    this.search = ''
    this.filteredManpower = [...this.manpowerList]; 
    this.filterManpower2()
  }

  onSubmit(){
    if(this.manForm.valid){
      const formData = this.manForm.value;
      console.log('Stored Data:', formData);
    }
  }
}

