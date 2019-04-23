import {
  Component, OnInit, Input, Output} from '@angular/core';
import { MatPaginatorIntl } from '@angular/material';
import { forEach } from '@angular/router/src/utils/collection';
export class MatPaginatorIntlUsers extends MatPaginatorIntl {
  itemsPerPageLabel = 'Users per page';
}

export const RESULTS_STATE = {
  WAITING: 'await-results',
  LOADING: 'load-results',
  LOADED: 'results-loaded',
  EMPTY: 'empty',
  ERROR: 'error',
  USER_ERROR: 'user-error'
}

@Component({
  selector: 'app-results-container',
  templateUrl: './results-container.component.html',
  styleUrls: ['./results-container.component.css']
})

export class ResultsContainerComponent implements OnInit{


  private _tweetsJson = null;

  @Input() 
  set tweetsJson(tweetsJson){   
    if (tweetsJson != null){
      if (tweetsJson.hasOwnProperty("error")){
        this.handleError(tweetsJson["error"])
        return;
      }

      if (tweetsJson.length == 0) {
        this.resultsPlaceHolderStyle = RESULTS_STATE.EMPTY;
        return
      }

      this._tweetsJson = tweetsJson;
      this.resultsPlaceHolderStyle = RESULTS_STATE.LOADED
      this.usersAmount = this._tweetsJson.length;
    } else {
      this._tweetsJson = tweetsJson;
      this.usersAmount = 0;
    }
    this.currPage = 0;
  }


  private _resultsPlaceHolderStyle: string;

  @Input()
  set resultsPlaceHolderStyle(resultsPlaceHolderStyle) {
    if (resultsPlaceHolderStyle == RESULTS_STATE.LOADING || resultsPlaceHolderStyle == RESULTS_STATE.WAITING) {
      this.resultsPlaceholderText = "results will show here"
    }
    this._resultsPlaceHolderStyle = resultsPlaceHolderStyle;
  }

 
  get resultsPlaceHolderStyle(){return this._resultsPlaceHolderStyle;}



  resultsPlaceholderText = "results will show here"
  embeddTweets: Boolean = true;

  usersAmount = 0;
  usersPerPage = 10;
  currPage = 0

  getXUsers() {
    if (this._tweetsJson == null)
      return null;

    if (!this.embeddTweets)
      return this._tweetsJson;

    var start = this.currPage * this.usersPerPage;
    var end = start + this.usersPerPage;
    return this._tweetsJson.slice(start, end);
  }

  handleError(errorMsg: string) {
    this._tweetsJson = null;
    this.resultsPlaceholderText = errorMsg;
    this.resultsPlaceHolderStyle = RESULTS_STATE.USER_ERROR;
  }

  constructor() {
   }


  ngOnInit() {
  }
}
