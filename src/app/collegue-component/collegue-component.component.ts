import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';
import {Collegue, Vote} from '../models';
import { Avis } from "../models";
import { CollegueService } from '../services/collegue.service';

@Component({
  selector: 'app-collegue-component',
  templateUrl: './collegue-component.component.html',
  styleUrls: ['./collegue-component.component.css']
})

export class CollegueComponentComponent implements OnInit {
  @Input() collegue:Collegue;
  constructor(private _collegueServ:CollegueService) {}
  @Output() vote:EventEmitter<Vote> = new EventEmitter<Vote>();

  ngOnInit() {
  }
  //pas de sens côté client d'avoir une modif de donnée
  onClick($event:Avis){

    this._collegueServ.donnerUnAvis(this.collegue, $event)
    .then(coll=> {
      this.collegue = coll;
      this.vote.emit(new Vote(this.collegue, $event))

    });
  }

}
