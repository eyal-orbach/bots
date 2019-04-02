import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    this.httpClient.post("http://" + backend_domain +'/botsfinder/subject-density', settingJson).subscribe(data => {
      console.log(data);
      updateResultsCallback(data);
    });
  }
}

