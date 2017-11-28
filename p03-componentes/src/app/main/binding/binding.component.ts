import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'indra-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BindingComponent implements OnInit {

  sNombre: string;

  constructor() { }

  ngOnInit() {
    this.borrar();
    }

  borrar(){
    this.sNombre = "";
  }

}

