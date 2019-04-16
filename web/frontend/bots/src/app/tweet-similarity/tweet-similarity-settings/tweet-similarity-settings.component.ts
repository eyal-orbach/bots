import { Component, OnInit, Output, EventEmitter } from '@angular/core';

const K_TWEETS = "kTweets";
const ORIGIN_TEXT = "originText";
const PROMPT_ORIGIN_TEXT = "חפש ציוץ כמוני"

@Component({
  selector: 'app-tweet-similarity-settings',
  templateUrl: './tweet-similarity-settings.component.html',
  styleUrls: ['./tweet-similarity-settings.component.css']
})

export class TweetSimilaritySettingsComponent implements OnInit {

  @Output() resultsTrigger: EventEmitter<Object> = new EventEmitter<Object>();

  originText: String = PROMPT_ORIGIN_TEXT
  kTweets: Number = 40;

  constructor() { }

  showResults() {
    var settingsObj = {}
    settingsObj[ORIGIN_TEXT] = this.originText;
    settingsObj[K_TWEETS] = this.kTweets;
    this.resultsTrigger.emit(settingsObj);
  }

  doTextareaValueChange(ev) {
    try {
      this.originText = ev.target.value;
    } catch (e) {
      console.info('could not set textarea-value');
    }
  }

  ngOnInit() { }

}
