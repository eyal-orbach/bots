import { Component, OnInit } from '@angular/core';
import { RESULTS_STATE } from '../results-container/results-container.component';
import { HebrewBotsServiceService } from '../hebrew-bots-service.service';

@Component({
  selector: 'app-behaviour-similarity',
  templateUrl: './behaviour-similarity.component.html',
  styleUrls: ['./behaviour-similarity.component.css']
})
export class BehaviourSimilarityComponent implements OnInit {

  resultsState: string = RESULTS_STATE.WAITING;
  resultsJson;
  botService: HebrewBotsServiceService;

  constructor(botsService: HebrewBotsServiceService) {
    this.botService = botsService;
  }

  handleSettings(evt) {
    this.resultsState = RESULTS_STATE.LOADING;
    this.resultsJson = null;
    var setingsJson = JSON.stringify(evt);
    this.botService.getSimilarBehaviours(setingsJson, (r) => { this.set_json(r) }, (e) => { this.handle_error(e) });
  }

  set_json(json) {
    this.resultsJson = json;
    if (this.resultsJson.length==0) {
        this.resultsState = RESULTS_STATE.EMPTY;
    } else {
      this.resultsState = RESULTS_STATE.LOADED;
    }
  }

  handle_error(e) {
    this.resultsState = RESULTS_STATE.ERROR;
    console.log(e);
  }

  ngOnInit() {
  }

}
