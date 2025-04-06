import {Component, input, output, signal, WritableSignal} from '@angular/core';
import {ButtonComponent} from "src/app/common/button/button.component";
import {FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";


@Component({
  selector: 'request-budget',
  imports: [
    ButtonComponent,
    ReactiveFormsModule
  ],
  templateUrl: './request-budget.component.html',
  styleUrl: './request-budget.component.scss'
})
export class RequestBudgetComponent {
  page: WritableSignal<number> = signal(0);

  //OUTPUT
  onNext = output();
  onBack = output();
  //DATA
  form_budget = input.required<FormGroup>();
  particulars!: FormArray<FormGroup>;
  particular_names: string[]=[];

  constructor(private fb: FormBuilder) {
    this.initData();
  }
  ngOnInit() {
    this.particulars = this.form_budget().get('particulars') as FormArray?? this.fb.array([]);
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
      item.controls['total'].setValue((value.budget_daily??0) * (value.qty??0) * (value.days??0));
    })
    this.particulars.push(item);
  }
  removeParticular(index: number){
    this.particulars.removeAt(index);
  }
  addOthers(){

  }
  getFormControlByName(fg: FormGroup,name: string) {
    return fg.controls[name] as FormControl;
  }
}
