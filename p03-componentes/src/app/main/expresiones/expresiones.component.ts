import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'indra-expresiones',
  templateUrl: './expresiones.component.html',
  styleUrls: ['./expresiones.component.css']
})
export class ExpresionesComponent implements OnInit {

  sName: string;
  nNumber: number;
  isSpanish: boolean;

    constructor() { }

    ngOnInit() {
      this.sName   = "Pepe";
      this.nNumber  = 22;
      }

   }

}
