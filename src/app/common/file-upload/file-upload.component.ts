import {Component, computed, ElementRef, input, viewChild} from '@angular/core';
import {ModalsService} from "src/app/services/common/modals/modals.service";

@Component({
  selector: 'file-upload',
  imports: [],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss'
})
export class FileUploadComponent {
  //UI
  loading: boolean = false;
  width_px = input<number>(427);
  height_px = input<number>(81);
  //INPUTS
  extensions = input<string[]>([]);
  accept = computed(()=>this.extensions().join(','));
  max_size = input<number>(2097152);
  max_size_mb = computed(()=>this.max_size()/1024/1024);
  file_input = viewChild.required('file_input',{read: ElementRef});
  file: File|null  = null;
  //

  constructor(private modals: ModalsService) {
  }
  onFileSelected(event: any) {
    if(!event.target.files.length) {
      return;
    }
    const file = event.target.files[0];

    this.file = file;
  }
  onSelect(){
    if(!this.file){
      return;
    }

  }
}
