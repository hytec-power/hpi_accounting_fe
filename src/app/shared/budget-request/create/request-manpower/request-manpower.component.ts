import { Component,computed, signal, WritableSignal } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { ButtonComponent } from 'src/app/common/button/button.component';
import { ModalComponent } from 'src/app/common/modal/modal.component';
import { CommonModule, NgStyle } from '@angular/common';


@Component({
  selector: 'request-manpower',
  imports: [
    ButtonComponent,
    ModalComponent,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './request-manpower.component.html',
  styleUrl: './request-manpower.component.scss'
})
export class RequestManpowerComponent {

  manForm: FormGroup;

  manpowerList = [
    // {name: "Jericho", img:'https://cdn.japan-forward.com/wp-content/uploads/2023/05/1453855_s.jpg'},
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
    this.updateActiveSkills();
  }

  validateActiveArray(control: AbstractControl) {
    return control.value.length > 0 ? null : { noActiveArray: true };
  }

  toggleSkill(index: number) {
    this.manpowerList[index].active = !this.manpowerList[index].active;
    this.activeCount = this.manpowerList.filter(skill => skill.active);
  }

  updateActiveSkills() {
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
  }

  closeModal2(){
    this.updateActiveSkills();
    this.showModal = false
  }

  onSubmit(){
    if(this.manForm.valid){
      const formData = this.manForm.value;
      console.log('Stored Data:', formData);
    }
  }
}

