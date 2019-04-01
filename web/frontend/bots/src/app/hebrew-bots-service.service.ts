import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HebrewBotsServiceService {

  httpClient;
  constructor(private http: HttpClient) {
    this.httpClient = http;
   }

  getSubjectDensityList(): String {

    this.httpClient.get('https://api.github.com/users/seeschweiler').subscribe(data => {
      console.log(data);
    });
    return "bla";
  }
}

