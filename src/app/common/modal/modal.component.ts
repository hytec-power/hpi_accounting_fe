import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';

@Component({
  imports:[CommonModule],
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() showModal = false; 
  @Input() modalWidth = '400px'; 
  @Input() modalHeight: string | null = null;  


}
