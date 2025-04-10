import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UploadsService {
  api: string = `${environment.apiUrl}/uploads`;
  constructor(private http: HttpClient) {
  }
  upload(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.api}`, formData, { observe: 'body' });
  }

}
