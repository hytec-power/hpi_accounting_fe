import {Injectable, viewChild} from '@angular/core';
import {ModalsComponent} from "src/app/common/modals/modals.component";

@Injectable({
  providedIn: 'root'
})
export class ModalsService {
  component!: ModalsComponent|undefined
  constructor() { }
  bindComponent(component: ModalsComponent) {
    this.component = component;
  }
  getInstance(){
    return this.component;
  }
}
