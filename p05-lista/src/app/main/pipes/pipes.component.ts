import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'indra-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  sNombre: string;
  nPrecio: number;
  nValor: number;
  dFecha: Date;
  oDatos: object;

  constructor() { }

  ngOnInit() {
    this.sNombre = 'Pepe perez';
    this.nPrecio = 25.5;
    this.nValor = 731.123456;
    this.dFecha = new Date();
    this.oDatos = {
      sNombre : 'Pepe perez',
      nPrecio : 25.5,
      nValor : 731.123456,
      dFecha : new Date(),
    };
  }

}
