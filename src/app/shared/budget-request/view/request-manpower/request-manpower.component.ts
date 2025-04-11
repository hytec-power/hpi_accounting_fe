import { Component } from '@angular/core';
import { ButtonComponent } from 'src/app/common/button/button.component';
import { NgClass } from '@angular/common';
import { manpower } from 'src/app/interfaces/request-manpower';
@Component({
  selector: 'request-manpower',
  imports: [
    ButtonComponent,
    NgClass
  ],
  templateUrl: './request-manpower.component.html',
  styleUrl: './request-manpower.component.scss'
})
export class RequestManpowerComponent {
  isEditable:boolean = false
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

  toggleEdit(){
      this.isEditable = !this.isEditable
  }

  addManpower(){
    this.manpowerList.push()
    console.log(this.manpowerList)
    this.toggleEdit()
  }

  
  
}
