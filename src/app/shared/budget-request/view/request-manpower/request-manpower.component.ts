import { Component, input, model } from '@angular/core';
import { ButtonComponent } from 'src/app/common/button/button.component';
import { NgClass } from '@angular/common';
import { HpiUser } from 'src/app/interfaces/hpi-user';
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
  manpowerList = input.required<HpiUser[]>();

  toggleEdit(){ 
      this.isEditable = !this.isEditable
  }

  addManpower(){
    console.log(this.manpowerList())
    this.toggleEdit()
  }

  
  
}
