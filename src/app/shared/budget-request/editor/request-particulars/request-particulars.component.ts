import {Component, computed, Signal, signal, ViewChild, WritableSignal} from '@angular/core';
import {ButtonComponent} from "src/app/common/button/button.component";
import {CurrencyPipe, TitleCasePipe} from "@angular/common";
import {
  ParticularsModalComponent
} from "src/app/shared/budget-request/editor/request-particulars/particulars-modal/particulars-modal.component";
import {ExpenseItem} from "src/app/interfaces/expense-item";

@Component({
  selector: 'request-particulars',
  standalone: true,
  imports: [
    ButtonComponent,
    CurrencyPipe,
    ParticularsModalComponent,
    TitleCasePipe
  ],
  templateUrl: './request-particulars.component.html',
  styleUrl: './request-particulars.component.scss'
})
export class RequestParticularsComponent {
  @ViewChild('modal',{static: true , read: ParticularsModalComponent}) modal!: ParticularsModalComponent;
  items: WritableSignal<ExpenseItem[]>=signal([]);
  total: Signal<number> = computed(()=> this.items().reduce((sum,item)=> sum+item.amount ,0) )
  ngOnInit(){}
  addItem(){
    this.modal.open();
  }
  onAdd(item: ExpenseItem){
    this.items.update(e=>([...e,item]));
  }
  removeItem(item: ExpenseItem){
    this.items.update(e=>([...e.filter(i=> i!=item)]));
  }
}
