import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Location } from '@angular/common';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

var backend_domain = "localhost:4200"

@Injectable({
  providedIn: 'root'
})
export class HebrewBotsServiceService {

  private httpClient: HttpClient;

  constructor(private http: HttpClient, private location: Location) {
    this.httpClient = http;
   }

  getSubjectDensityList(settingJson:string, updateResultsCallback) {
    this.httpClient.post(this.location.prepareExternalUrl('/bots/api/subjectdensity'), settingJson, httpOptions).subscribe(data => {
      console.log(data);
      updateResultsCallback(data);
    });
  }
}

