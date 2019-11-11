import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { IOrganization } from './Organization';

@Injectable({
  providedIn: 'root'
})
export class OrgListService {
    url: string='http://localhost:8000/api/';
    headers:HttpHeaders = new HttpHeaders();
  options:any;

  constructor(private http: HttpClient) { 
    this.headers.append("enctype","mutipart/form-data");
    this.headers.append("Component-Type","application/json");
    this.headers.append("X-Requested-With","XMLHttpRequest");
  }

  getOrg():Observable<IOrganization[]>{
    return this.http.get<IOrganization[]>(this.url+'organizations');
    
  }

 

 // for select relation tables
 selectOrgs():Observable<IOrganization>{
    return this.http.get<IOrganization>(this.url+"organizationList");
  }

  deleteOrgs(id):Observable<IOrganization> {
    return this.http.delete<IOrganization>(this.url+"organizations/"+id);
  }

  createOrganization(data):Observable<IOrganization> {
    return this.http.post<IOrganization>(this.url+"organizations",data);
  }
 
  
}
