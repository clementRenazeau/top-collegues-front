import { Component, OnInit } from '@angular/core';
import {Avis} from '../models';
import {Collegue} from '../models';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  col0:Collegue;
  col1:Collegue;
  col2:Collegue;
  col3:Collegue;
  desCollegues:Collegue[];
  constructor() { }

  ngOnInit() {
    this.col0=new Collegue("http://www.journeefemmeafricaine.com/wp-content/uploads/2017/06/journee-femme-africaine-inspiration-citation-fin-debut-250x250.jpg", "MARIE", 100);
    this.col1=new Collegue("http://beauteronde.fr/wp-content/uploads/2018/04/adult-beard-blur-713521-250x250.jpg", "YVES", 100);
    this.col2=new Collegue("http://geneticancer.org/wp-content/uploads/2016/06/vivre-avec-femme-250x250.jpg", "NADEJE", 100);
    this.col3=new Collegue("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Nicolas_Cage_-_66%C3%A8me_Festival_de_Venise_%28Mostra%29.jpg/220px-Nicolas_Cage_-_66%C3%A8me_Festival_de_Venise_%28Mostra%29.jpg", "NICOLAS", 100)
    this.desCollegues=[this.col0, this.col1, this.col2, this.col3];
  }

}
