import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ButtonComponent } from "../../../../common/button/button.component";

@Component({
  selector: 'app-adeditmodal',
  imports: [ButtonComponent],
  templateUrl: './adeditmodal.component.html',
  styleUrl: './adeditmodal.component.scss'
})
export class AdeditmodalComponent {
  @ViewChild('basicdialog') dialogRef!: ElementRef<HTMLDialogElement>;
  @ViewChild('confirmDialog') confirmDialog!: ElementRef<HTMLDialogElement>;
  @ViewChild('successDialog') successDialog!: ElementRef<HTMLDialogElement>;

  isEdit = false;

  openDialog() {  
    this.dialogRef.nativeElement.showModal();
  }
  onDismiss(){
    this.dialogRef.nativeElement.close();
  }
  onCancel(){
    this.confirmDialog.nativeElement.close();
  }
  onConfirm(){
    this.successDialog.nativeElement.showModal();
    this.confirmDialog.nativeElement.close();
  }
  openConfirmDialog() {
    this.confirmDialog.nativeElement.showModal();
  }
  closeSuccess(){
    this.successDialog.nativeElement.close();
  }
}
