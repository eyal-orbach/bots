import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';



const PROMPT_ORIGIN_TEXT: string =   "ביבי מבטיח נאום \"חד כתער\"\ באסיפה הכללית מחר.מה יהיה שם ? איראן ? טרור ?? צדקת דרכנו ??? שואה ???? שרה והשגריר המיקרונזי לא יכולים לחכות";
const ORIGIN_TEXT = "originText";
const K_USERS = "k_users";
const SUBJECT_PROXIMITY = "subjectProximity";
const DENSITY = "density";
@Component({
  selector: 'app-density-settings',
  templateUrl: './density-settings.component.html',
  styleUrls: ['./density-settings.component.css']
})
export class DensitySettingsComponent implements OnInit {

  @Output() resultsTrigger: EventEmitter<Object> = new EventEmitter<Object>();

  originText: String = PROMPT_ORIGIN_TEXT
  k_users: Number = 20;
  subjectProximity: Number = 0.8;

  constructor() {   }
 
  showResults() {
    var settingsObj = {}
    settingsObj[ORIGIN_TEXT] = this.originText;
    settingsObj[K_USERS] = this.k_users;
    settingsObj[SUBJECT_PROXIMITY] = this.subjectProximity;
    settingsObj[DENSITY] = (1 - Number(this.subjectProximity));
    this.resultsTrigger.emit(settingsObj);
  }

  doTextareaValueChange(ev) {
    try {
      this.originText = ev.target.value;
    } catch (e) {
      console.info('could not set textarea-value');
    }
  }

  ngOnInit() {
  }

}
