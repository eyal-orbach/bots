import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Location } from '@angular/common';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8'
  })
};


var subject_density_api = '/bots/api/subjectdensity'
var tweet_similarity_api = '/bots/api/tweetsimilarity'
var behaviour_similarity_api = '/bots/api/behavioursimilarity'

@Injectable({
  providedIn: 'root'
})
export class HebrewBotsServiceService {

  private httpClient: HttpClient;

  constructor(http: HttpClient, private location: Location) {
    this.httpClient = http;
   }

  getSubjectDensityList(settingJson: string, updateResultsCallback, errorCallback) {
    var url = this.location.prepareExternalUrl(subject_density_api);
    this.callApi(settingJson, updateResultsCallback, errorCallback, url);
  }


  getSimilarTweets(setingsJson: string, updateResultsCallback, errorCallback) {
    var url = this.location.prepareExternalUrl(tweet_similarity_api);
    this.callApi(setingsJson, updateResultsCallback, errorCallback, url);
  }

  getSimilarBehaviours(setingsJson: string, updateResultsCallback, errorCallback) {
    var url = this.location.prepareExternalUrl(behaviour_similarity_api);
    this.callApi(setingsJson, updateResultsCallback, errorCallback, url);
  }

  private callApi(settingJson: string, updateResultsCallback: any, errorCallback, url) {
    this.httpClient.post(url, settingJson, httpOptions).subscribe(data => {
      console.log(data);
      updateResultsCallback(data);
    }, e=>errorCallback(e));
  }


}

