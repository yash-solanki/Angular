import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Users } from './User';
import { ObserveOnMessage } from 'rxjs/internal/operators/observeOn';
import { Login } from './loginstatus';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  withCredentials: true
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  getData(): Observable<Users[]> {
    return this.http.get<Users[]>('http://localhost:8005/user/', httpOptions);
  }
  removeData(id: string): Observable<Users>{
    console.log(id);
    return this.http.delete<Users>('http://localhost:8005/user/' + id, httpOptions );
  }
  getRecord(id: string): Observable<Users> {
    console.log(id);
    return this.http.get<Users>('http://localhost:8005/user/' +  id , httpOptions);
  }
  updatadata(user: Users,id: string):Observable<Users>{
    return this.http.put<Users>('http://localhost:8005/user/' + id, user, httpOptions);
  }
  insertdata(data: Users): Observable<Users>{
    return this.http.post<Users>('http://localhost:8005/user/', data, httpOptions);

  }
  login(data: Users): Observable<Users> {
    console.log('service');
    console.log(data);
    return this.http.post<Users>('http://localhost:8005/login', data, httpOptions);
  }
  logout(): Observable<Users> {
    return this.http.get<Users>('http://localhost:8005/logout', httpOptions);
 }
 loginornot(): Observable<Login> {
    return this.http.get<Login>('http://localhost:8005/user/checkuserloginornot', httpOptions);
 }
}
