import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
      Welcome {{name}}
    </h2> 
    <button (click)="onClick($event)">Greet</button>
    <button (click)="greeting='Welcome Yash'">greet</button>
    {{greeting}}
    <input #myInput type = "text">
    <button (click)="logm(myInput.value)">Log</button>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = "CodeE";
  public greeting = "";

  constructor() { }

  ngOnInit() {
  }
  onClick(event) {
    console.log(event);
    this.greeting = event.type;
  }
  logm(val) {
    console.log(val);
  }


}
