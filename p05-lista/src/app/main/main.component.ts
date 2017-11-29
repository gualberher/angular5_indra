import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'indra-main',
  template: `
    <article class="alto">
      <indra-tarea class="col-12 mt-4"></indra-tarea>
      <indra-acumulador class="col-12 mt-4"></indra-acumulador>
      <indra-pipes class="col-12 mt-4"></indra-pipes>
    </article>
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
