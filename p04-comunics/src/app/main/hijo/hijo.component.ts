import { Component, OnInit, Input , Output} from '@angular/core';
import { EventEmitter} from '@angular/EventEmitter';

@Component({
  selector: 'indra-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() sNombre: string;
  @Output() eRespuesta: EventEmitter<any>;
  sNuevoName: string;

  constructor() {
    this.eRespuesta = new EventEmitter();
  }

  ngOnInit() {
    this.sNuevoName ="";
  }

  responder(){
      this.eRespuesta.emit(this.sNuevoName);
  }
}
