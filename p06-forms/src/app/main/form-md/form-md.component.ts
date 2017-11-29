import { Component, OnInit } from '@angular/core';
import { ImpresoraModel, DepartamentoModel } from '../datos.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'indra-form-md',
  templateUrl: './form-md.component.html',
  styleUrls: ['./form-md.component.css']
})

export class FormMdComponent implements OnInit {

  oImpresora: ImpresoraModel;
  aImpresoras: Array<ImpresoraModel>;
  aDptos: Array<DepartamentoModel>;
  oDpto: DepartamentoModel;
  isColor: boolean;
  isClaro: boolean;

  formulario: FormGroup;

  constructor() { }

  ngOnInit() {
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

    this.formulario = new FormGroup({
      name: new FormControl('Pepe', [Validators.required, Validators.minLength(3)]),
      apellido: new FormControl('', Validators.required),
      telefono: new FormControl('', [Validators.required, Validators.pattern('^\d(9)$')]),
      printer: new FormControl(),
      iscolor: new FormControl(true),
      isclaro: new FormControl(true),
      departamento: new FormControl(),
    });

    console.log(this.formulario);
 }
 enviarForm() {
  console.log('formulario enviado');
  // this.borrarForm();
}

borrarForm() {
  // console.log(this.formulario);
  // this.formulario.resetForm() ;
}

}
