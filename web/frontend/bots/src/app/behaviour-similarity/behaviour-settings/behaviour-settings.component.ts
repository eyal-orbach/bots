import { Component, OnInit, Output, EventEmitter } from '@angular/core';

const K_USERS = "k_users"
const ORIGIN_USER_ID = "origin_user_id"

@Component({
  selector: 'app-behaviour-settings',
  templateUrl: './behaviour-settings.component.html',
  styleUrls: ['./behaviour-settings.component.css']
})
export class BehaviourSettingsComponent implements OnInit {

  kUsers: Number = 20;
  idUser: Number = 1092588148163559424;
  
  @Output() resultsTrigger: EventEmitter<Object> = new EventEmitter<Object>();

  constructor() { }

  showResults() {
    var settingsObj = {}
    settingsObj[K_USERS] = this.kUsers;
    settingsObj[ORIGIN_USER_ID] = this.idUser;
    this.resultsTrigger.emit(settingsObj);
  }


  ngOnInit() {
  }

}
