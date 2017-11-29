import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'indra-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  sNombre: string;

  constructor() { }

  ngOnInit() {
    sNombre ="Pepe";
  }

  responderHijo(sEvent){
      this.sNombre = sEvent;
  }
}
