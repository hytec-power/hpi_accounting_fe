import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceRoleSelector {

  constructor() {

  }
  select(services:any[], role: string){
    return services.find(s=> (s.role ?? null) == role )?? null;
  }
}
