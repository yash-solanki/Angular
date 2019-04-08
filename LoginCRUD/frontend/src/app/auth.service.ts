import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { getToken } from '@angular/router/src/utils/preactivation';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registerUrl = 'http://localhost:4040/issues/register';

  private loginUrl = 'http://localhost:4040/issues/login';

  private logoutUrl = 'http://localhost:4040/issues/logout';

  private tokenUrl = 'http://localhost:4040/issues/token';

  constructor( private http: HttpClient, private router: Router) {
   }

  registerUser(user) {
    return this.http.post<any>(this.registerUrl, user);
  }

  loginUser(user) {
    return this.http.post<any>(this.loginUrl, user);
  }

  loggedInGoogle() {
    return !!localStorage.getItem('gtoken');
  }

  loggedIn() {
     return !!localStorage.getItem('Login');
  }

  loggedInFacebook() {
    return !!localStorage.getItem('fbtoken');
  }

  logoutUser() {
    console.log('Logout');
    localStorage.removeItem('Login');
    localStorage.removeItem('gtoken');
    localStorage.removeItem('fbtoken');
    return this.http.post(this.logoutUrl, { ab : 'token'} )
    .subscribe(
     res => {
      console.log('sacb');
      this.router.navigate(['/login']);
     });
  }

  getToken() {
    return this.http.get<any>(this.tokenUrl);
  }

}
