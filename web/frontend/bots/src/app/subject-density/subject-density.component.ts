import { Component, OnInit } from '@angular/core';
import { HebrewBotsServiceService } from '../hebrew-bots-service.service';
import { ResultsContainerComponent, RESULTS_STATE} from '../results-container/results-container.component'

import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';



@Component({
  selector: 'app-subject-density',
  templateUrl: './subject-density.component.html',
  styleUrls: ['./subject-density.component.css']
})
export class SubjectDensityComponent implements OnInit {
  botService: HebrewBotsServiceService;
  resultsJson: object;
  resultsState: string;

  constructor(botsService: HebrewBotsServiceService, private renderer2: Renderer2, @Inject(DOCUMENT) private _document) { 
    this.botService = botsService;
    this.resultsState = RESULTS_STATE.WAITING
  }

  callbackClosure(i, callback) {
    return function () {
      return callback(i);
    }
  }

  handleSettings(evt) {
    this.resultsState = RESULTS_STATE.LOADING;
    this.resultsJson = null;
    var setingsJson = JSON.stringify(evt) ;
    this.botService.getSubjectDensityList(setingsJson, (r)=>{this.set_json(r)} );
  }

  set_json(json){
    this.resultsJson = json
    this.resultsState = RESULTS_STATE.LOADED
  }

  ngOnInit() {
  }

}
