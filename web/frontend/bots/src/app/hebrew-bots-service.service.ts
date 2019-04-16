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
var tweet_similarity_api = '/bots/api/tweetsimilarity'

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
    this.callApi(settingJson, updateResultsCallback, url);
  }


  getSimilarTweets(setingsJson: string, updateResultsCallback) {
    var url = this.location.prepareExternalUrl(tweet_similarity_api);
    this.callApi(setingsJson, updateResultsCallback, url);
  }

  private callApi(settingJson: string, updateResultsCallback: any, url) {
    this.httpClient.post(url, settingJson, httpOptions).subscribe(data => {
      console.log(data);
      updateResultsCallback(data);
    });
  }


}

