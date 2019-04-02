import { Component, OnInit } from '@angular/core';
import { HebrewBotsServiceService } from '../hebrew-bots-service.service';

@Component({
  selector: 'app-subject-density',
  templateUrl: './subject-density.component.html',
  styleUrls: ['./subject-density.component.css']
})
export class SubjectDensityComponent implements OnInit {
  botService: HebrewBotsServiceService;

  constructor(botsService: HebrewBotsServiceService) { 
    this.botService = botsService;
  }

  
  handleSettings(evt) {
    console.log("testing!!!!!!!!!!!!")
    console.log(evt)
    var setingsJson = JSON.stringify(evt) 
    console.log("service" + this.botService.getSubjectDensityList(setingsJson, this.handleResults));
  }

  private handleResults(dataJSON : string) {

  }
  ngOnInit() {
  }

}
