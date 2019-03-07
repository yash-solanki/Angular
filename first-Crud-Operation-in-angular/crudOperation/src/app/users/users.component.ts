import { Users } from '../User';
import { UsersService } from '../users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Login } from '../loginstatus';
import { checkAndUpdateBinding } from '@angular/core/src/view/util';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Users[];
  check: Login;

  constructor(private usersservice: UsersService, private route: ActivatedRoute,private location: Location,private router: Router) { }

  ngOnInit() {
    this.loginornot();
    this.getData();


  }
  getData(): void {
    this.usersservice.getData().subscribe((data) => {
        this.users = data;
        console.log(data);
    });
  }
  removedata(id: string): void {
    console.log(id);
    this.usersservice.removeData(id).subscribe(() => {
      this.getData();
    });

  }
  loginornot(): void {
    this.usersservice.loginornot().subscribe((data) => {
      this.check = data;
      console.log(this.check);
      if(this.check.status === 'logout' ){
        this.router.navigate(['/login']);
      }
    });
  }

  logout(): void {
    this.usersservice.logout().subscribe((data) => {
      console.log('Logout');
      this.router.navigate(['/login']);
    });

  }
}
