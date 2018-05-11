import { Component, OnInit, Input } from '@angular/core';
import {Collegue} from '../models';
import { Avis } from "../models";
@Component({
  selector: 'app-collegue-component',
  templateUrl: './collegue-component.component.html',
  styleUrls: ['./collegue-component.component.css']
})
export class CollegueComponentComponent implements OnInit {
  @Input() collegue:Collegue;
  constructor() {}

  ngOnInit() {
  }
  //pas de sens côté client d'avoir une modif de donnée
  onClick(avis:Avis){
    /*if(avis==0){
      this.collegue.score +=1;
    }
    else{
      this.collegue.score -=1;
    }*/
  }

}
