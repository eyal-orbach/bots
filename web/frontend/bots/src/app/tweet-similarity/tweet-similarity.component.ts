import { Component, OnInit } from '@angular/core';
import { RESULTS_STATE } from '../results-container/results-container.component';
import { HebrewBotsServiceService } from '../hebrew-bots-service.service';

@Component({
  selector: 'app-tweet-similarity',
  templateUrl: './tweet-similarity.component.html',
  styleUrls: ['./tweet-similarity.component.css']
})
export class TweetSimilarityComponent implements OnInit {

  resultsState : string = RESULTS_STATE.WAITING;
  resultsJson : object;
  botService: HebrewBotsServiceService;
  
  constructor(botsService: HebrewBotsServiceService) { 
    this.botService = botsService;
  }

  handleSettings(evt) {
    this.resultsJson = null;
    this.resultsState = RESULTS_STATE.LOADING;
    var setingsJson = JSON.stringify(evt);
    this.botService.getSimilarTweets(setingsJson, (r) => { this.set_json(r)}, (e)=>{this.handle_error(e)});
  }

  set_json(json) {
    this.resultsState = RESULTS_STATE.LOADED;
    this.resultsJson = json;
    if (json.hasOwnProperty("error")) {
      this.resultsState = RESULTS_STATE.USER_ERROR;
    }
  }

  handle_error(e) {
    this.resultsJson = null;
    this.resultsState = RESULTS_STATE.ERROR;
    console.log(e);
  }
  

  ngOnInit() {
  }

}
