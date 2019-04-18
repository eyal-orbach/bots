import { Component, OnInit, Input } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material';
export class MatPaginatorIntlUsers extends MatPaginatorIntl {
  itemsPerPageLabel = 'Users per page';
}

export const RESULTS_STATE = {
  WAITING: 'await-results',
  LOADING: 'load-results',
  LOADED: 'results-loaded',
  ERROR: 'error'
}

@Component({
  selector: 'app-results-container',
  templateUrl: './results-container.component.html',
  styleUrls: ['./results-container.component.css']
})

export class ResultsContainerComponent implements OnInit {

  private _tweetsJson = null;
  
  @Input() 
  set tweetsJson(tweetsJson){
    this._tweetsJson = tweetsJson;
    
    if (this._tweetsJson != null){
      this.usersAmount = this._tweetsJson.length;
    } else {
      this.usersAmount = 0;
    }
    this.currPage = 0;
  }



  @Input() resultsPlaceHolderStyle: string;
  resultsPlaceholderText = "results will show here"
  embeddTweets: Boolean = false;

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

  constructor() {
   }


  ngOnInit() {
  }

}
