import {Component, ElementRef, input, model, output, viewChild} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'dropdown',
  imports: [
    NgClass
  ],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {
  //UI
  view = viewChild.required('main',{read: ElementRef});
  width = input<string>();
  //DATA
  placeholder = input('Select Option');
  value = model<DropdownItem>();
  items = input<DropdownItem[]>([]);
  //OUTPUTS
  onSelect = output<any>();

  ngOnInit(): void {}

  select(item: DropdownItem) {
    this.value.set(item);
    this.onSelect.emit(item.value);
    this.view()?.nativeElement.blur();
  }

}
export interface DropdownItem {
  name: string;
  value: any
}
