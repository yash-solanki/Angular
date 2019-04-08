import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.loggedIn() || this.authService.loggedInGoogle() || this.authService.loggedInFacebook() )  {
     // console.log('scbikj  ' + this.appComponent.dataFatch() + '   sacsac');
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
