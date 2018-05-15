import { Component, OnInit } from '@angular/core';
import {Avis, Collegue} from '../models';
import { CollegueService } from '../services/collegue.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  /*col0:Collegue;
  col1:Collegue;
  col2:Collegue;
  col3:Collegue;*/
  desCollegues:Collegue[];
  constructor(private _collegueServ : CollegueService) { }

  ngOnInit() {
    this._collegueServ.listerCollegues()
    .then(cols => this.desCollegues =cols)
    .catch(err =>console.log(err));
  }

}
