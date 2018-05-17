import { Component, OnInit } from '@angular/core';
import { Collegue } from '../models';
import { CollegueService } from '../services/collegue.service';

@Component({
  selector: 'app-ajouter-un-collegue',
  templateUrl: './ajouter-un-collegue.component.html',
  styleUrls: ['./ajouter-un-collegue.component.css']
})
export class AjouterUnCollegueComponent implements OnInit {
  collegue:Collegue = new Collegue(null, null, null, null, null, null, null);
  submitted=false;
  constructor(private _collServ:CollegueService) { }

  ngOnInit() {
  }
  submit() {
    this._collServ.ajouterCollegue(this.collegue)
    .then(c=>{
      this.collegue=c;
    })
    .catch(err=>console.log(err));
    }

}
