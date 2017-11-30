import { Injectable } from '@angular/core';

@Injectable()
export class LibrosService {

  aDatos: Array<string>;

  constructor() {
    this.aDatos = ['Angular 30 min',
    'Fundamentos de Angular',
    'Angular avanzado',
    'Angular para torpes',
    ];

  }

  buscarMock(clave: string) {
    return this.aDatos;
  }

  buscarMockAsync(clave: string) {
    return new Promise((resolve, reject) => {
      setTimeout( () => {resolve(
        JSON.stringify(this.aDatos)); }, 2000);
    });
  }

}
