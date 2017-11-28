import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'indra-main',
  template: `
  <div class="container">
    <article class="alto row">
      <indra-binding class="col-6 mt-3"></indra-binding>
      <indra-expresiones class="col-6 mt-3"></indra-expresiones>
      <indra-local class="col-6 mt-3"></indra-local>
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
