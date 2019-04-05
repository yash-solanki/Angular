import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocialauthService {
  private socialUrl = 'http://localhost:4040/issues/checkauth';
  private passT = 'http://localhost:4040/issues/passToken';

  constructor( private http: HttpClient, private router: Router ) {
  }

  // return this.http.post<any>(this.registerUrl, user);
  GoogleSignUp() {
    return this.http.get<any>(this.socialUrl);
  }

  getToken() {
    // return localStorage.getItem()
  }
  passToken(token): Observable<any> {
    const tc = {
      token
    };
    console.log('social auth');
    console.log(token);
    console.log(tc);
    return this.http.post<any>(this.passT, tc);
    // post req.
  }
}
