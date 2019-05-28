import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {};

  constructor( private auth: AuthService, private router: Router, private ar: ActivatedRoute) { }

  ngOnInit() {
    this.ar.queryParams.subscribe(data => {
      console.log(data.token);
      if (data.token) {
        localStorage.setItem('fbtoken', data.token);
        this.router.navigate(['/list']);
      }
    });
  }

  loginUser() {
    console.log(this.loginUserData);
    this.auth.loginUser(this.loginUserData)
      .subscribe(
        res => {
          console.log(this.loginUserData);
          console.log(res);
          localStorage.setItem('Login', 'true');
          // localStorage.setItem('token', res.token);
          this.router.navigate(['/list']);
        },
        err => console.log(err)
      );
  }

}
