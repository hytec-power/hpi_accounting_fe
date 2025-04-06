import {Component, input, output, signal, WritableSignal} from '@angular/core';
import {ButtonComponent} from "src/app/common/button/button.component";
import {FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CurrencyPipe} from "@angular/common";


@Component({
  selector: 'request-budget',
  imports: [
    ButtonComponent,
    ReactiveFormsModule,
    CurrencyPipe
  ],
  templateUrl: './request-budget.component.html',
  styleUrl: './request-budget.component.scss'
})
export class RequestBudgetComponent {
  page: WritableSignal<number> = signal(1);

  //OUTPUT
  onNext = output();
  onBack = output();
  //DATA
  form_budget = input.required<FormGroup>();
  total: number = 0;
  particulars!: FormArray<FormGroup>;
  others!: FormArray<FormGroup>;
  particular_names: string[]=[];

  constructor(private fb: FormBuilder) {
    this.initData();
  }
  ngOnInit() {
    this.particulars = this.form_budget().get('particulars') as FormArray?? this.fb.array([]);
    this.others = this.form_budget().get('others') as FormArray?? this.fb.array([]);
    this.form_budget().valueChanges.subscribe(i=> this.updateTotal() );
    this.updateTotal();
  }
  initData(){
    this.particular_names = [
      'Meals',
      'Hotel Accomodation',
      'Client Reservation',
      'Toll Fee',
      'Gas',
    ];
  }
  addParticular(){
    const item = this.fb.group({
        name: ['', Validators.required],
        budget_daily: [0, Validators.required],
        qty: [0, Validators.required],
        days: [0, Validators.required],
        total: [{value: 0, disabled: true}, Validators.required,Validators.min(1)],
    });
    item.valueChanges.subscribe(value => {
      item.controls['total'].setValue((value.budget_daily??0) * (value.qty??0) * (value.days??0),{emitEvent: false});
    })
    this.particulars.push(item);
  }
  removeParticular(index: number){
    this.particulars.removeAt(index);
  }
  addOthers(){
    const item = this.fb.group({
      name: ['', Validators.required],
      total: [0, Validators.required],
    });
    this.others.push(item);
  }
  removeOthers(index: number){
    this.others.removeAt(index);
  }
  getFormControlByName(fg: FormGroup,name: string) {
    return fg.controls[name] as FormControl;
  }
  updateTotal() {
    let total = 0;
    total+= this.particulars.controls.reduce((sum,i)=> sum+=i.controls['total'].value ,0);
    total+= this.others.controls.reduce((sum,i)=> sum+=i.controls['total'].value ,0);
    this.total = total;
  }
  isPageValid(){
    if(this.page() == 0) return this.form_budget().valid  && this.total > 0 && (this.particulars.length > 0 || this.others.length > 0);
    return false;
  }
}
