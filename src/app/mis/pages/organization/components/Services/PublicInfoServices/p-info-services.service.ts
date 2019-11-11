import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IOrganization } from '../Organization';



@Injectable({
  providedIn: 'root'
})
export class PInfoServicesService {

  url: string='http://localhost:8000/api/';
  headers:HttpHeaders = new HttpHeaders();
  options:any;

  constructor(private http:HttpClient) {

    this.headers.append("enctype","mutipart/form-data");
    this.headers.append("Component-Type","application/json");
    this.headers.append("X-Requested-With","XMLHttpRequest");

   }

   getPublicInfoAsDB():Observable<IOrganization[]> {
     return this.http.get<IOrganization[]>(this.url+"organizations");
   }
}
