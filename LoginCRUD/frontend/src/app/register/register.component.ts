import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { SocialauthService } from '../socialauth.service';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControlName  } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData = {};
  createUser: FormGroup;

  constructor( private auth: AuthService, private router: Router, private fb: FormBuilder, private socialAuth: SocialauthService ) {
    this.createUser = this.fb.group({
      email: ['', Validators.required],
      password: ''
    });
   }

  ngOnInit() {
  }
  googleSignup() {
    this.socialAuth.GoogleSignUp()
      .subscribe(
        res => {
          console.log(res);
          // localStorage.setItem('gtoken', res);
          window.location.href = res.gurl;

          this.router.navigate(['/login']);
        }
      );
    // window.location.href = 'http://localhost:4040/issues/checkauth';
  }

  registerUser() {
    this.auth.registerUser(this.registerUserData)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('Login', 'true');
          // localStorage.setItem('token', res.token);
          this.router.navigate(['/login']);
        },
        err => console.log(err)
      );
  }
}
