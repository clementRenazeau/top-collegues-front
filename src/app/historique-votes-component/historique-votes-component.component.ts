import { Component, OnInit, Input } from '@angular/core';
import {Vote}from '../models';
import {Collegue} from '../models';

@Component({
  selector: 'app-historique-votes-component',
  templateUrl: './historique-votes-component.component.html',
  styleUrls: ['./historique-votes-component.component.css']
})
export class HistoriqueVotesComponentComponent implements OnInit {
  @Input () votes:Vote[];
  constructor() { }

  ngOnInit() {
  }

}
