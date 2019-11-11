import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {
  url: string = 'http://localhost:8000/api/';
  constructor(private http: HttpClient) { }

  addAbout(data){
    return this.http.post(this.url+'add-about-us',data);
  }
}
