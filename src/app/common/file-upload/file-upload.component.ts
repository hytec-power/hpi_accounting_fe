import {Component, computed, input} from '@angular/core';

@Component({
  selector: 'file-upload',
  imports: [],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss'
})
export class FileUploadComponent {
  width_px = input<number>(427);
  height_px = input<number>(81);
  extensions = input<string[]>([]);
  accept = computed(()=>this.extensions().join(','));
  max_size = input<number>(2097152);
  onFileSelected(event: Event) {

  }
}
