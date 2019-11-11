import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBankAccount } from './BankAccount';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankAccountsService {
  subject = new Subject();
  url:string='http://localhost:8000/api/';
  constructor(private http: HttpClient) { }

  setRefresh(rf){
    this.subject.next(rf);
  }
  getRefresh(){
    return this.subject.asObservable();
  }
  getLookups(){
    return this.http.get(this.url+'get-bank-lookups');
  }
  addBankAccounts(data){
    return this.http.post(this.url+'bankaccounts', data);
  }
  getBankAccounts():Observable<IBankAccount[]>{
    return this.http.get<IBankAccount[]>(this.url+'bankaccounts');
  }
  deleteAccount(id)
  {
    return this.http.delete<IBankAccount[]>(this.url+'bankaccounts/'+id);
  }
  editAccountData(id):Observable<IBankAccount[]>{
    return this.http.get<IBankAccount[]>(this.url+'bankaccounts/'+id+"/edit");
  }
  updateAccount(data,id){
   return this.http.patch(this.url+'bankaccounts/'+id,data);
   
  }


}
