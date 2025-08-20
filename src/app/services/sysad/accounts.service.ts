import { Injectable } from '@angular/core';
import {environment} from "src/environments/environment";
import {HttpClient} from "@angular/common/http";
import {User} from "src/app/interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  api = `${environment.apiUrl}/sysad/accounts`;
  constructor(private http: HttpClient) { }
  list(){
    return this.http.get<User[]>(`${this.api}`,  { observe: 'body' } );
  }

}
