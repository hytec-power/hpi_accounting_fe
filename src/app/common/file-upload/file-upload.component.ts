import {Component, computed, ElementRef, input, viewChild} from '@angular/core';
import {ModalsService} from "src/app/services/common/modals/modals.service";
import {LoaderSpinnerComponent} from "src/app/common/loader-spinner/loader-spinner.component";
import {UploadsService} from "src/app/services/common/uploads/uploads.service";

@Component({
  selector: 'file-upload',
  imports: [
    LoaderSpinnerComponent
  ],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss'
})
export class FileUploadComponent {
  //UI
  loading: boolean = false;
  error: boolean = false;
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

  constructor(private modals: ModalsService,
              private uploadsApi: UploadsService) {
  }
  apiUpload(file: File) {
    this.loading = true;
    this.uploadsApi.upload(file)
        .subscribe({
          error: error => {this.error = true; this.loading = false;},
          complete: () => this.loading = false
        });
  }
  onFileSelected(event: any) {
    if(!event.target.files.length) {
      return;
    }
    const file = event.target.files[0];
    const ext = file.name.split('.').pop()??'';
    if(file.size > this.max_size()) {
      this.modals.getInstance()?.showInfo('Error',`File size exceeds maximum size of ${this.max_size_mb()}MB`,'OK');
      return;
    }
    if(this.extensions().length > 0 && !this.extensions().includes(ext)) {
      this.modals.getInstance()?.showInfo('Error',`File format invalid`,'OK');
      return;
    }
    this.file = file;
    this.apiUpload(file)
  }
  retryUpload(){
    this.apiUpload(this.file!);
  }
  clear(){
    this.file = null;
  }
}
