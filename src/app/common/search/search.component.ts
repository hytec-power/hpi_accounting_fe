import {Component, input, model} from '@angular/core';
import {ButtonComponent} from "src/app/common/button/button.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'search-component',
  imports: [
    ButtonComponent,
    FormsModule
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  value = model<string>('');
  width = input<string>();
  search_text = input<string>('Search');
  search_bi_icon = input<string>('');
  placeholder = input<string>('Search');

}
