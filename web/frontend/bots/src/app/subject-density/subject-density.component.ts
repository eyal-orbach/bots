import { Component, OnInit } from '@angular/core';
import { HebrewBotsServiceService } from '../hebrew-bots-service.service';

import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';



@Component({
  selector: 'app-subject-density',
  templateUrl: './subject-density.component.html',
  styleUrls: ['./subject-density.component.css']
})
export class SubjectDensityComponent implements OnInit {
  botService: HebrewBotsServiceService;
  tweetsJson: object

  constructor(botsService: HebrewBotsServiceService, private renderer2: Renderer2, @Inject(DOCUMENT) private _document) { 
    this.botService = botsService;
  }

  callbackClosure(i, callback) {
    return function () {
      return callback(i);
    }
  }

  
  handleSettings(evt) {
    console.log("testing!!!!!!!!!!!!")
    console.log(evt)
    var setingsJson = JSON.stringify(evt) 
    this.botService.getSubjectDensityList(setingsJson, (i)=>{this.set_json(i)} );
  }


  set_json(json){
    console.log("before: " + this.tweetsJson)
    this.tweetsJson = json
    console.log("after: " + this.tweetsJson)
  }

  getCallback(){
    var ref = this.tweetsJson
  return function(dataJSON : object) {
    ref = dataJSON;
   }
  }

  ngOnInit() {
    let r = Math.random().toString(36).substring(7);
    const s = this.renderer2.createElement('script');
    s.type = 'text/javascript';
    s.src = "http://localhost:8000/static/widgets.js";
    s.text = ``;
    this.renderer2.appendChild(this._document.body, s);
  }

}
