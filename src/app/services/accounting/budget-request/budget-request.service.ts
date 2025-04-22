import { Injectable } from '@angular/core';
import {environment} from "src/environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {BudgetRequest} from "src/app/interfaces/budget-request";

@Injectable({
  providedIn: 'root'
})
export class BudgetRequestService {
  api = `${environment.apiUrl}/accounting/budget-requests`;
  constructor(private http: HttpClient) { }
  index(page: number,query: string,sort:string = '',type: string='',status: string=''){
    const params = new HttpParams().append('page',page)
                                              .append('query',query)
                                              .append('sort',sort)
                                              .append('type',type)
                                              .append('status',status);
    return this.http.get<{count: number, items: BudgetRequest[]}>(`${this.api}`,{observe: 'body',params:params});
  }
  find(uuid: string) {
    return this.http.get<BudgetRequest>(`${this.api}/${uuid}`,{ observe: 'body' });
  }
}
