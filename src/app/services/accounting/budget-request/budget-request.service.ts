import { Injectable } from '@angular/core';
import {environment} from "src/environments/environment";
import {HttpClient} from "@angular/common/http";
import {BudgetRequest} from "src/app/interfaces/budget-request";

@Injectable({
  providedIn: 'root'
})
export class BudgetRequestService {
  api = `${environment.apiUrl}/accounting/budget-requests`;
  constructor(private http: HttpClient) { }
  index(){
    return this.http.get<BudgetRequest[]>(`${this.api}`,{observe: 'body'});
  }
  find(uuid: string) {
    return this.http.get<BudgetRequest>(`${this.api}/${uuid}`,{ observe: 'body' });
  }
}
