import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'indra-main',
  template: `
    <div class="container">
      <article class="row alto">
        <indra-mock-libros></indra-mock-libros>
        <indra-mock-libros-async></indra-mock-libros-async>
        <indra-buscar-google class="mt-4"></indra-buscar-google>
        <indra-buscar-httpsrv></indra-buscar-httpsrv>
      </article>
    </div>
  `,
  styles: [
    '.alto {min-height: 10rem}'
  ]
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
