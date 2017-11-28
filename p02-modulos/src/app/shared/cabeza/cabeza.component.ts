import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'indra-cabeza',
  templateUrl: './cabeza.component.html',
  styleUrls: ['./cabeza.component.css']
})
export class CabezaComponent implements OnInit {

  title: string;

  constructor() { }

  ngOnInit() {
    this.title = 'Modulos en Angular'
  }

}
