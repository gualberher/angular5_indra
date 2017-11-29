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
      if(localStorage.getItem('tarea')){
        this.aTareas = JSON.parse(localStorage.getItem('tarea'));
      } else{
        this.aTareas = [];
      }
  }

    addTarea(){
      this.aTareas.push(this.sTarea);
      this.actualizarStorage();
      this.sTarea = "";
    }

    delTarea(i: number){
      this.aTareas.splice(i,1);
      this.actualizarStorage();
    }

    private actualizarStorage(){
      localStorage.setItem('tarea',JSON.stringify(this.aTareas));
    }
}
