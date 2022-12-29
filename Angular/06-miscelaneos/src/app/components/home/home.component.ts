import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <app-ng-style></app-ng-style>

  <app-css></app-css>
  <p>Hola mundo desde app.component</p>
  <app-clases></app-clases>
  
  <!--  sin input-->
  <p appResaltado>Hola mundo!</p>
  
  <p [appResaltado]="'orange'">Hola mundo!</p>


  <app-switch></app-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { 
    console.log("Constructor");
    
  }

  ngOnInit(): void {
    console.log("ngOnInit");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges");
  }
  ngDoCheck(): void {
    console.log("ngDoCheck");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }

}
