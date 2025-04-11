import { Component } from '@angular/core';
import { ButtonComponent } from 'src/app/common/button/button.component';
import { NgClass } from '@angular/common';
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

  toggleEdit(){ 
      this.isEditable = !this.isEditable
  }
  
}
