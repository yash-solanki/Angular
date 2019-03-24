import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registerUrl = 'http://localhost:4040/issues/register';

  private loginUrl = 'http://localhost:4040/issues/login';

  private logoutUrl = 'http://localhost:4040/issues/logout';

  private tokenUrl = 'http://localhost:4040/issues/token';

  constructor( private http: HttpClient, private router: Router) { }

  registerUser(user) {
    return this.http.post<any>(this.registerUrl, user);
  }

  loginUser(user) {
    return this.http.post<any>(this.loginUrl, user);
  }

  loggedIn() {
    // return !!localStorage.getItem('token');
    return !!(this.http.get<any>(this.tokenUrl));
  }

  logoutUser() {
    // return this.http.post(this.logoutUrl, 'token');
    // localStorage.removeItem('token');

    return this.http.get<any>(this.logoutUrl);

    this.router.navigate(['/login']);
  }

  getToken() {
    // return localStorage.getItem('token');
    return this.http.get<any>(this.tokenUrl);
  }

}
