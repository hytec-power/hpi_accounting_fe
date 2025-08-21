import { Injectable } from '@angular/core';
import {environment} from "src/environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {User} from "src/app/interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  api = `${environment.apiUrl}/sysad/accounts`;
  constructor(private http: HttpClient) { }
  list(x: {query: string, page: number }) {
    const params = new HttpParams().appendAll(x);
    return this.http.get<{ count: number, items: User[]}>(`${this.api}`,  { params: params, observe: 'body' } );
  }
  create(email: string, role: string) {
    const payload = { email: email, role: role };
    return this.http.post(`${this.api}`, payload , { observe: 'response' } );
  }
  update(uuid: string,role: string) {
    return this.http.patch(`${this.api}/${uuid}`, { role: role  }, { observe: 'response' } );
  }
}
