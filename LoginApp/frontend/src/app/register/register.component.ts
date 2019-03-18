import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { PeopleService } from '../people.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {

  createForm: FormGroup;

  constructor( private peopleService: PeopleService, private router: Router, private fb: FormBuilder ) {
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  addUser( name, email ) {
    this.peopleService.addUser(name, email).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }


  ngOnInit() {
  }

}
