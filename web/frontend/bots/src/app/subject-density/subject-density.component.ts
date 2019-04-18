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

  constructor(botsService: HebrewBotsServiceService) { 
    this.botService = botsService;
    this.resultsState = RESULTS_STATE.WAITING
  }

  handleSettings(evt) {
    this.resultsState = RESULTS_STATE.LOADING;
    this.resultsJson = null;
    var setingsJson = JSON.stringify(evt) ;
    this.botService.getSubjectDensityList(setingsJson, (r)=>{this.set_json(r)}, (e)=>{this.handle_error(e)} );
  }

  set_json(json){
    this.resultsJson = json
    this.resultsState = RESULTS_STATE.LOADED
  }
  
  handle_error(e) {
    this.resultsState = RESULTS_STATE.ERROR;
    console.log(e);
  }
  ngOnInit() {
  }

}
