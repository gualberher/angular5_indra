import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'indra-main',
  template: `
    <article class="alto">
      <indra-form-td class="row"></indra-form-td>
      <indra-form-md></indra-form-md>
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
