import { Component } from '@angular/core';
import { AuthService } from './auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{
  title = 'frontend';
  token = false ;

  // ngOnInit() {
  //   this.dataFatch();
  // }

  constructor( public authService: AuthService ) {
    this.dataFatch();
  }

  dataFatch() {
    this.authService
      .getToken()
        .subscribe( data => {
          if ( data ) {
            this.token = true;
            return true;
          } else {
            this.token = false;
            return false;
          }
        });
  }


}
