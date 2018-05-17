import { Component, OnInit, Input,EventEmitter, Output} from '@angular/core';
import {Collegue, Vote} from '../models';
import { Avis } from "../models";
import { CollegueService } from '../services/collegue.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-collegue',
  templateUrl: './detail-collegue.component.html',
  styleUrls: ['./detail-collegue.component.css']
})

export class DetailCollegueComponent implements OnInit {
  pseudo:string;
  collegue:Collegue = new Collegue(null, null, null, null, null, null, null);
  @Output() vote:EventEmitter<Vote> = new EventEmitter<Vote>();

  constructor(private route: ActivatedRoute, private _collServ: CollegueService) {
    this.pseudo=route.snapshot.paramMap.get("pseudo");
    this._collServ.trouverCollegue(this.pseudo)
    .then(col =>this.collegue=col)
    .catch(err=>console.log(err));
  }

  ngOnInit() {
  }
  onClick($event:Avis){

    this._collServ.donnerUnAvis(this.collegue, $event)
    .then(col=> {
      this.collegue = col;
      this.vote.emit(new Vote(this.collegue, $event))

    });
  }
}
