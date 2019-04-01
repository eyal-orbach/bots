import { Component, OnInit } from '@angular/core';
import { HebrewBotsServiceService} from '../../hebrew-bots-service.service'


const PROMPT_ORIGIN_TEXT: string =   "ביבי מבטיח נאום \"חד כתער\"\ באסיפה הכללית מחר.מה יהיה שם ? איראן ? טרור ?? צדקת דרכנו ??? שואה ???? שרה והשגריר המיקרונזי לא יכולים לחכות";
@Component({
  selector: 'app-density-settings',
  templateUrl: './density-settings.component.html',
  styleUrls: ['./density-settings.component.css']
})
export class DensitySettingsComponent implements OnInit {

  originText: String = PROMPT_ORIGIN_TEXT
  k_users: Number = 40;
  subjectProximity: Number = 0.8;

  botService;

  constructor(botsService:HebrewBotsServiceService) {
    this.botService = botsService;
   }
 
  showResults() {
    console.log("testing!!!!!!!!!!!!")
    console.log("service" + this.botService.getSubjectDensityList());


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
