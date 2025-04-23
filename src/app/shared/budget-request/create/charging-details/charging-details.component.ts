import { CommonModule } from '@angular/common';
import {Component, input, model, output} from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from 'src/app/common/button/button.component';
import {Client} from "src/app/interfaces/client";
import {ClientsService} from "src/app/services/common/clients/clients.service";
import {DropdownItem} from "src/app/common/dropdown/dropdown.component";

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
  items: Client[]=[];
  dropdown_clients: DropdownItem[]=[];
  onNext = output();
  onBack = output();
  list_years: number[]=[];
  selected_client = model<Client|null>(null);
  constructor(private client: ClientsService){
    this.init();
  }
  ngOnInit() {
    this.apiFetch();
  }
  apiFetch(){
    this.client.index()
         .subscribe(res=>this.items = res);
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
