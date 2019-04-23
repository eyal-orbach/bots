import { Component, OnInit } from '@angular/core';
import { RESULTS_STATE } from '../results-container/results-container.component';
import { HebrewBotsServiceService } from '../hebrew-bots-service.service';

@Component({
  selector: 'app-behaviour-similarity',
  templateUrl: './behaviour-similarity.component.html',
  styleUrls: ['./behaviour-similarity.component.css']
})
export class BehaviourSimilarityComponent implements OnInit {

  public resultsState = RESULTS_STATE.WAITING;
  resultsJson;
  botService: HebrewBotsServiceService;

  constructor(botsService: HebrewBotsServiceService) {
    this.botService = botsService;
  }

  handleSettings(evt) {
    this.resultsJson = null;
    this.resultsState = RESULTS_STATE.LOADING;
    var setingsJson = JSON.stringify(evt);
    this.botService.getSimilarBehaviours(setingsJson, (r) => { this.set_json(r) }, (e) => { this.handle_error(e) });
  }

  set_json(json) {
    this.resultsState = RESULTS_STATE.LOADED
    this.resultsJson = json;
  }

  handle_error(e) {
    this.resultsJson=null;
    this.resultsState = RESULTS_STATE.ERROR;
    console.log(e);
  }

  ngOnInit() {
  }

}
