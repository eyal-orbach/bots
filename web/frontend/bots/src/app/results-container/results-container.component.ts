import {
  Component, OnInit, Input, Output} from '@angular/core';
import { MatPaginatorIntl } from '@angular/material';
import { forEach } from '@angular/router/src/utils/collection';
export class MatPaginatorIntlUsers extends MatPaginatorIntl {
  itemsPerPageLabel = 'Tweets per page';
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
  countTweets(tweetsJson): number {
    var sumTweets = 0;
    for (var user in tweetsJson) {
      sumTweets += user["tweets"].size;
    }

    return sumTweets;
  }

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
      this.splitJsonToPagesArr(tweetsJson)
    } else {
      this._tweetsJson = tweetsJson;
      this.tweetsAmount = 0;
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

  tweetsPages;
  tweetsAmount;
  tweetsPerPage = 100;
  currPage = 0

  getXUsers() {
    if (this._tweetsJson == null)
      return null;

    if (!this.embeddTweets)
      return this._tweetsJson;

    return this.tweetsPages[this.currPage];
  }

  splitJsonToPagesArr(tweetsJson){
    var pagesArray = []
    var page = [];
    var pageTweetCount = 0;
    var totalTweetCount = 0;
    for (var key in tweetsJson){
      var user = tweetsJson[key]
      var utweetsArr = user["tweets"];
      if(pageTweetCount + utweetsArr.length < this.tweetsPerPage) {
        totalTweetCount += utweetsArr.length;
        pageTweetCount += utweetsArr.length;
        page.push(user)
        if (pageTweetCount == this.tweetsPerPage) {
          pagesArray.push(page)
          page = []
          pageTweetCount = 0;
        }
      }else{
        var leftTweets = utweetsArr.length;
        var index = 0;
        while(leftTweets > 0){
          var tweetsToPopulate = this.tweetsPerPage - pageTweetCount;
          var tweets = utweetsArr.slice(index, index + tweetsToPopulate)
          index+=tweets.length;
          var newUser = this.jsonCopy(user)
          newUser["tweets"]=tweets;

          totalTweetCount += tweets.length;
          pageTweetCount += tweets.length;
          page.push(newUser);
          leftTweets -= tweets.length;
          if(pageTweetCount == this.tweetsPerPage){
            pagesArray.push(page)
            page = []
            pageTweetCount = 0;
          }
        }
      }
    }
    pagesArray.push(page)

    this.tweetsAmount = totalTweetCount;
    this.tweetsPages = pagesArray;
  }

  jsonCopy(src) {
    return JSON.parse(JSON.stringify(src));
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
