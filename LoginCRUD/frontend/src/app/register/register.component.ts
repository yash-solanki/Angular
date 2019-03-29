import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
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

  constructor( private auth: AuthService, private router: Router, private fb: FormBuilder ) {
    this.createUser = this.fb.group({
      email: ['', Validators.required],
      password: ''
    });
   }

  ngOnInit() {
  }
  googleSignup(){
    window.location.href = 'http://localhost:4040/checkauth';
  }

  faceSignup() {
    window.location.href = 'http://localhost:4040/auth/facebook';
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
