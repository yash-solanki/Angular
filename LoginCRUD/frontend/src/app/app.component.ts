import { Component } from '@angular/core';
import { AuthService } from './auth.service';
// import { AutoLogoutService } from './component/auto-logout';
import { AutoLogoutService } from './component/auto-logout.service';
import { Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend';
  token = false ;
  loading = true;

  constructor( public authService: AuthService, private autoLogout: AutoLogoutService, private router: Router ) {
    this.tokenFatch();
    router.events.subscribe(( routerEvent: Event ) => {
      this.checkRouterEvent(routerEvent);
    });
  }

  checkRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof NavigationStart) {
      this.loading = true;
    }
    if ( routerEvent instanceof NavigationEnd ||
          routerEvent instanceof NavigationCancel ||
          routerEvent instanceof NavigationError
      ) {
        this.loading = false;
      }
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
