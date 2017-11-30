import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'indra-logo',
  template: `<img class="img-fluid" [alt]="altImg" [src]="logoImg">`
})
export class LogoComponent implements OnInit {

  logoImg: string;
  altImg: string;

  constructor() { }

  ngOnInit() {
    this.logoImg = '../../../assets/logo_angular.svg';
    this.altImg = 'Angular Logo';
  }

}
