import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

var backend_domain = "localhost:8000"

@Injectable({
  providedIn: 'root'
})
export class HebrewBotsServiceService {

  private httpClient: HttpClient;

  constructor(private http: HttpClient) {
    this.httpClient = http;
   }

  getSubjectDensityList(settingJson:string, updateResultsCallback) {
    this.httpClient.post("http://" + backend_domain + '/bots/api/subject-density', settingJson, httpOptions).subscribe(data => {
      console.log(data);
      updateResultsCallback(data);
    });
  }
}

