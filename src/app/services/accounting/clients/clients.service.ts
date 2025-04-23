import { Injectable } from '@angular/core';
import {environment} from "src/environments/environment";
import {HttpClient} from "@angular/common/http";
import { Client} from "src/app/interfaces/client";

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  api = `${environment.apiUrl}/accounting/clients`;
  constructor(private http: HttpClient) { }
  index(){
    return this.http.get<{count: number, items:Client[]}>(`${this.api}`,{observe: 'body'});
  }
  find(uuid: string) {
    return this.http.get<Client>(`${this.api}/${uuid}`,{observe: 'body'});
  }
  create(payload: any) {
    return this.http.post(`${this.api}`,payload,{observe: 'response'});
  }
  update(uuid: string, payload: any) {
    return this.http.patch(`${this.api}/${uuid}`,payload,{observe: 'response'});
  }
  delete(uuid: string) {
    return this.http.delete(`${this.api}/${uuid}`,{observe: 'response'});
  }
}
