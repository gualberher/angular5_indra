import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'indra-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {

  // El tipo ElementRef es una referencia al DOM
  // similar a la que retorna $(selector) en jQuery
  //que incluye el elemento en la propiedad nativeElement
  @ViewChild('nombre') sName: ElementRef;

  constructor() { }

  ngOnInit() {
    console.log(this.sName);
    this.sName.nativeElement.value = "Pepe";
  }

}

