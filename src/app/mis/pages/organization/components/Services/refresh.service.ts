import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RefreshService {
  subject = new Subject();
  constructor() { }
  setRefresh(rf){
    this.subject.next(rf);
  }
  getRefresh(){
    return this.subject.asObservable();
  }
}
