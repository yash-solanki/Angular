import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private peopleService: PeopleService, private router: Router ) { }

  ngOnInit() {
  }

}
