import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'indra-main',
  template: `
    <article class="alto">
    <p>
      main works!
    </p>
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
