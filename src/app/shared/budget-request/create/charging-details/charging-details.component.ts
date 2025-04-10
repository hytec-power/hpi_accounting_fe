import { CommonModule } from '@angular/common';
import {Component, input, output} from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from 'src/app/common/button/button.component';

@Component({
  selector: 'charging-details',
  imports: [ButtonComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './charging-details.component.html',
  styleUrl: './charging-details.component.scss'
})
export class ChargingDetailsComponent {
  //DATA
  form = input.required<FormGroup>()
  //
  onNext = output();
  onBack = output();
  list_years: number[]=[];
  constructor(){
    this.init();
  }
  init(){
    this.initYears();
  }
  initYears(){
    let year = new Date().getFullYear();
    for(let i =0 ; i < 10 ; i++ ){
      this.list_years.push(year);
      year+=1;
    }
  }
}
