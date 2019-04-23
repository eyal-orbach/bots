import { Component, OnInit, Output, EventEmitter } from '@angular/core';

const K_USERS = "k_users";
const ORIGIN_USER_ID = "origin_user_id";
const START_DATE="start_date";
const END_DATE = "end_date";

@Component({
  selector: 'app-behaviour-settings',
  templateUrl: './behaviour-settings.component.html',
  styleUrls: ['./behaviour-settings.component.css']
})
export class BehaviourSettingsComponent implements OnInit {

  kUsers: Number = 20;
  idUser = '909695270283292672';
  startDate:Date = new Date("1/1/2019");
  endDate: Date = new Date("3/31/2019");
  @Output() resultsTrigger: EventEmitter<Object> = new EventEmitter<Object>();

  constructor() { }

  showResults() {
    var settingsObj = {}
    settingsObj[K_USERS] = this.kUsers;
    settingsObj[ORIGIN_USER_ID] = this.idUser;
    settingsObj[START_DATE] = this.startDate.getTime() / 1000;
    settingsObj[END_DATE] = this.endDate.getTime() / 1000;
    this.resultsTrigger.emit(settingsObj);
  }


  ngOnInit() {
  }

}
