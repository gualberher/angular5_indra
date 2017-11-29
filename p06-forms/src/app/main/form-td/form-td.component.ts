import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ImpresoraModel, DepartamentoModel, UsuarioModel, Usuario } from '../datos.model';

@Component({
  selector: 'indra-form-td',
  templateUrl: './form-td.component.html',
  styleUrls: ['./form-td.component.css']
})
export class FormTdComponent implements OnInit {

  oImpresora: ImpresoraModel;
  aImpresoras: Array<ImpresoraModel>;
  aDptos: Array<DepartamentoModel>;
  oDpto: DepartamentoModel;
  oUsuario: UsuarioModel;
  isColor: boolean;
  isClaro: boolean;

  @ViewChild('formtd')
  formulario: ElementRef;

  constructor() { }

  ngOnInit() {

    this.oUsuario = new Usuario('', '', '');

    this.aImpresoras = [
      {id: 1, nombre: 'HP'},
      {id: 2, nombre: 'Lexmark'},
      {id: 3, nombre: 'Cannon'}
    ];
    this.aDptos = [
      {id: 1, nombre: 'Ventas'},
      {id: 2, nombre: 'Marketing'},
      {id: 3, nombre: 'Compras'},
      {id: 4, nombre: 'sistemas'}
    ];

    console.log(this.formulario);
  }

  enviarForm() {
    console.log('formulario enviado');
    this.borrarForm();
  }

  borrarForm() {
    // console.log(this.formulario);
    this.formulario.resetForm() ;
  }
}
