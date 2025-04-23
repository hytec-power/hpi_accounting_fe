import { Injectable } from '@angular/core';
import {environment} from "src/environments/environment";
import {HttpClient} from "@angular/common/http";
import {Client} from "src/app/interfaces/client";

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  api: string = `${environment.apiUrl}/clients`;
  constructor(private http: HttpClient) {
  }
  index(){
    return this.http.get<Client[]>(`${this.api}`,{observe: 'body'});
  }
}
