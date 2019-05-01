import { Component, Input, Output } from '@angular/core';
// import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  inputVar = 'Hi from Parent';

  childval = '';

  // @Output() myOutput: string;

  constructor() {
  }

  getData(val) {

    this.childval = val;
    console.log(this.childval);
  }

}
