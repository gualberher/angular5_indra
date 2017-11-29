import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'indra-main',
  template: `
    <article class="alto">
      <indra-form-td class="row"></indra-form-td>
      <indra-formmd class="row"></indra-formmd>
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
