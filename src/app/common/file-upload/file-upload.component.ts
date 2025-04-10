import {Component, input} from '@angular/core';

@Component({
  selector: 'file-upload',
  imports: [],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss'
})
export class FileUploadComponent {
  width_px = input<number>(427);
  height_px = input<number>(81);
}
