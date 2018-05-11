import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {Avis} from '../models';

@Component({
  selector: 'app-avis-component',
  templateUrl: './avis-component.component.html',
  styleUrls: ['./avis-component.component.css']
})
export class AvisComponentComponent implements OnInit {
  @Output() change:EventEmitter<Avis> = new EventEmitter<Avis>();
  constructor() { }

  ngOnInit() {
  }
  onClickAime(){
    this.change.emit(Avis.AIMER);
  }
  onClickDeteste(){
    this.change.emit(Avis.DETESTER);
  }
}
