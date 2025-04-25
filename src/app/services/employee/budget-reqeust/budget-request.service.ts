import { Injectable } from '@angular/core';
import {environment} from "src/environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {BudgetRequest} from "src/app/interfaces/budget-request";
import {HpiUser} from "src/app/interfaces/hpi-user";


@Injectable({
  providedIn: 'root'
})
export class BudgetRequestService {
  api = `${environment.apiUrl}/employee/budget-requests`;
  constructor(private http: HttpClient) { }
  index(page:number,query: string,sort: string,type: string = '',status: string = ''){
    const params = new HttpParams().set("page", page)
                                              .set("sort", sort)
                                              .set("type", type)
                                              .set("status", status)
                                              .set("query", query);

    return this.http.get<{ count:number , items: BudgetRequest[] }>(`${this.api}`,{observe: 'body',params: params});
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
  employees(){
    return this.http.get<HpiUser[]>(`${this.api}/employees`,{observe: 'body'});
  }
  manpower(uuid:string){
    return this.http.get<HpiUser[]>(`${this.api}/${uuid}/manpower`, {observe: 'body'});
  }
}
