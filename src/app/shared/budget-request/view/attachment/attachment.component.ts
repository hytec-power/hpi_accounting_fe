import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attachment',
  imports: [FormsModule, CommonModule],
  templateUrl: './attachment.component.html',
  styleUrl: './attachment.component.scss'
})
export class AttachmentComponent {
  isEditable = false;
  onedit(){
    this.isEditable = !this.isEditable
  }
}
