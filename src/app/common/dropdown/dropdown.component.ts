import {Component, input, model, output} from '@angular/core';

@Component({
  selector: 'dropdown',
  imports: [],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {
  placeholder = input('Select Option');
  selection = model<DropdownItem>();
  items: DropdownItem[] = [];
  //OUTPUTS
  onSelect = output<any>();

  select(item: DropdownItem) {
    this.selection.set(item);
    this.onSelect.emit(item.value);
  }

}
export interface DropdownItem {
  name: string;
  value: any
}
