import { Component, OnInit } from '@angular/core';
import {Avis, Collegue} from '../models';
import { CollegueService } from '../services/collegue.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-accueil-component',
  templateUrl: './accueil-component.component.html',
  styleUrls: ['./accueil-component.component.css']
})
export class AccueilComponentComponent implements OnInit {

  desCollegues:Collegue[];
  constructor(private _collegueServ : CollegueService) { }

  ngOnInit() {
    this._collegueServ.listerCollegues()
    .then(cols => this.desCollegues =cols)
    .catch(err =>console.log(err));
  }
}
