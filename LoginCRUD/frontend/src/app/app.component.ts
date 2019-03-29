import { Component } from '@angular/core';
import { AuthService } from './auth.service';
// import { AutoLogoutService } from './component/auto-logout';
import { AutoLogoutService } from './component/auto-logout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend';
  token = false ;

  constructor( public authService: AuthService, private autoLogout: AutoLogoutService ) {
    this.tokenFatch();
  }


  tokenFatch() {
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
