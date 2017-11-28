import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'indra-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  autor: string;
  empresa: string;

  constructor() { }

  ngOnInit() {
    this.autor = 'Gualberto Hdez';
    this.empresa = 'Indra S.L.';
  }

}
