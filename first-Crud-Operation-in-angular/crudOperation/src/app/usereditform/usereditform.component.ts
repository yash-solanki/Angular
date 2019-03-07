
import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormsModule  } from '@angular/forms';
import { devModeEqual } from '@angular/core/src/change_detection/change_detection';
import { Users  } from '../User';
import { stringify } from '@angular/core/src/render3/util';
@Component({
  selector: 'app-usereditform',
  templateUrl: './usereditform.component.html',
  styleUrls: ['./usereditform.component.css']
})
export class UsereditformComponent implements OnInit {
    obj: Users;
    insertval: Users = { name: '', email: '', password: '' , _id: '' };


  constructor(private usersService: UsersService,  private route: ActivatedRoute,private location: Location,private router: Router) {}

  ngOnInit() {

    this.getRecord();
  }
  getRecord(): void {

    const id: string =  this.route.snapshot.paramMap.get('userid');
    console.log(id);
    this.usersService.getRecord(id).subscribe((data) => {
        this.obj = data;

    });

  }
  updateRecord(): void {
    const id: string =  this.route.snapshot.paramMap.get('userid');
    this.usersService.updatadata(this.obj , id).subscribe(() => {
      this.router.navigate(['./viewuser']);

    });

  }
  insertRecord(): void {
    this.usersService.insertdata(this.insertval).subscribe(() => {
      console.log('Insert Data SuccessFully');
      this.router.navigate(['./viewuser']);
  });

  }


}
