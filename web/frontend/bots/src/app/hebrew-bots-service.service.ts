import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Location } from '@angular/common';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


var subject_density_api = '/bots/api/subjectdensity'

@Injectable({
  providedIn: 'root'
})
export class HebrewBotsServiceService {

  private httpClient: HttpClient;

  constructor(private http: HttpClient, private location: Location) {
    this.httpClient = http;
   }

  getSubjectDensityList(settingJson:string, updateResultsCallback) {
    var url = this.location.prepareExternalUrl(subject_density_api);
    this.httpClient.post(url, settingJson, httpOptions).subscribe(data => {
      console.log(data);
      updateResultsCallback(data);
    });
  }
}

