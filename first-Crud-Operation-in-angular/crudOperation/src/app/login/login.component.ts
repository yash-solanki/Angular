import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Users } from '../User';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormsModule  } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  obj: Users = {name: '', email: '', password: '', _id: ''};

  constructor(private userService: UsersService, private route: ActivatedRoute, private location: Location, private router: Router) { }

  ngOnInit() {
  }

  login(): void {
    this.userService.login(this.obj).subscribe((data) => {
      this.router.navigate(['/viewuser']);
    });
 }



}
