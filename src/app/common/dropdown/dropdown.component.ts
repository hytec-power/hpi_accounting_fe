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
  selection = model<DropdownItem>();
  value = model<any>();
  items = input<DropdownItem[]>([]);
  //OUTPUTS
  onSelect = output<any>();
  onChange = output<void>();

  ngOnInit(): void {
    if(this.value()){
      this.selection.set(this.items().find(i=> i.value == this.value()));
    }
  }

  select(item: DropdownItem) {
    this.selection.set(item);
    this.value.set(item.value)
    this.onSelect.emit(item.value);
    this.view()?.nativeElement.blur();
    this.onChange.emit();
  }

}
export interface DropdownItem {
  name: string;
  value: any
}
