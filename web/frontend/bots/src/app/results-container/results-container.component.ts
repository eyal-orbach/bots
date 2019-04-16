import { Component, OnInit, Input } from '@angular/core';

export const RESULTS_STATE = {
  WAITING: 'await-results',
  LOADING: 'load-results',
  LOADED: 'results-loaded'
}

@Component({
  selector: 'app-results-container',
  templateUrl: './results-container.component.html',
  styleUrls: ['./results-container.component.css']
})

export class ResultsContainerComponent implements OnInit {

  @Input() tweetsJson: object;
  @Input() resultsPlaceHolderStyle: string;
  embeddTweets: Boolean = false;

  constructor() {
   }


  ngOnInit() {
  }

}
