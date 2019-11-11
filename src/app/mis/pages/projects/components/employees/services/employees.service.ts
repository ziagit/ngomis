import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  server:string ='http://localhost:8000/api/';
  headers:HttpHeaders = new HttpHeaders();
  options:any;

  constructor(private http :HttpClient) { 
    this.headers.append("enctype","mutipart/form-data");
    this.headers.append("Component-Type","application/json");
    this.headers.append("X-Requested-With","XMLHttpRequest");
  }
  getrealationtable(){
    return this.http.get(this.server+"employeerelation");
  }
  getEmployeedata():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.server+"employees");
  }
  addEmployeedata(data):Observable<Employee>{
    return this.http.post<Employee>(this.server+"employees",data);
  }
  editEmployeedata(id):Observable<Employee>{
    return this.http.get<Employee>(this.server+"employees/"+id+"/edit");
  }
  updateEmployeedata(data,id):Observable<Employee>{
    return this.http.patch<Employee>(this.server+"employees/"+id,data);
  }
  deleteEmployeedata(id):Observable<Employee>{
    return this.http.delete<Employee>(this.server+"employees/"+id);
  }
  showAllemployeeData(id):Observable<Employee>{
    return this.http.get(this.server+"employees/"+id);
  }
}
