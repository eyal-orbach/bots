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
  resultsJson: object;
  botService: HebrewBotsServiceService;

  constructor(botsService: HebrewBotsServiceService) {
    this.botService = botsService;
  }

  handleSettings(evt) {
    this.resultsState = RESULTS_STATE.LOADING;
    this.resultsJson = null;
    var setingsJson = JSON.stringify(evt);
    this.botService.getSimilarBehaviours(setingsJson, (r) => { this.set_json(r) });
  }

  set_json(json) {
    this.resultsJson = json
    this.resultsState = RESULTS_STATE.LOADED
  }

  ngOnInit() {
  }

}
