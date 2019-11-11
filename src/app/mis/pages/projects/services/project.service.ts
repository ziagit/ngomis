import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  server:string ='http://localhost:8000/api/';
  headers:HttpHeaders = new HttpHeaders();
  options:any;

  constructor(private http :HttpClient) { 
    this.headers.append("enctype","mutipart/form-data");
    this.headers.append("Component-Type","application/json");
    this.headers.append("X-Requested-With","XMLHttpRequest");
  }
  addProject(data):Observable<Project>{
    return this.http.post<Project>(this.server+"projects",data);
  }
  getProjectdata():Observable<Project[]>{
    return this.http.get<Project[]>(this.server+"projects");
  }
  updateProjectdata(data,id):Observable<Project>{
    return this.http.patch<Project>(this.server+"projects/"+id,data);
  }
  // for delete project
  deleteProjectdata(id):Observable<Project>{
    return this.http.delete<Project>(this.server+"projects/"+id);
  }
  // for select relation tables
  selectTables():Observable<Project>{
    return this.http.get<Project>(this.server+"listrelationproject");
  }


}
