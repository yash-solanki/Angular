import { Component, OnInit , Input , Output, EventEmitter, ViewChild } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {

  public parentVal: string;
  @Output() myOutput = new EventEmitter<string>();

  outputString = 'Hello from Child';

  @Input() myValue: string;

  constructor() {
  }

  ngOnInit() {
  }

  sendData() {
    this.myOutput.emit(this.outputString);
  }

}
