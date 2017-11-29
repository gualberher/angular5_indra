import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'indra-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {

  aTareas: Array<string>;
  // aTareas: string[]; //es lo mismo
  sTarea: string;

  constructor() { }

  ngOnInit() {
      this.aTareas = [];
  }

    addTarea(){
      this.aTareas.push(this.sTarea);
      this.sTarea = "";
    }
}
