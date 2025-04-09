import { Injectable } from '@angular/core';
import {environment} from "src/environments/environment";
import {HttpClient} from "@angular/common/http";
import {BudgetRequest} from "src/app/interfaces/budget-request";


@Injectable({
  providedIn: 'root'
})
export class BudgetRequestService {
  api = `${environment.apiUrl}/employee/budget-requests`;
  constructor(private http: HttpClient) { }
  index(){
    return this.http.get<BudgetRequest[]>(`${this.api}`,{observe: 'body'});
  }
  find(uuid: string) {
    return this.http.get<BudgetRequest>(`${this.api}/${uuid}`,{ observe: 'body' });
  }
  create(payload: any){
    return this.http.post(`${this.api}`,payload,{observe: 'response'});
  }
  update(uuid: string, payload: any){
    return this.http.patch(`${this.api}/${uuid}`,{observe: 'response'});
  }
  delete(uuid: string){

  }
}
