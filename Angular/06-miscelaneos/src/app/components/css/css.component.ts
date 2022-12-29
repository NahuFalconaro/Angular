import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
  <p>p desde css.components</p>
  `,
  styles: [
    `
    p{
      color:red;
    }
  `]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
