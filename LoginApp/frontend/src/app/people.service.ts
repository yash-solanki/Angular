import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor( private http: HttpClient) { }

  addUser( name, email) {
    const user = {
      name,
      email
    };
    return this.http.post(`http://localhost:3030/people/adduser`, user);
  }

  getUser() {
    return this.http.get(`http://localhost:3030/people`);
  }

  getUserById(id) {
    return this.http.get(`http://localhost:3030/people/${id}`);
  }

  updateUser(id, name, email) {
    const user = {
      name,
      email
    };
    return this.http.post(`http://localhost:3030/people/updateuser/${id}`,user);
  }

  deleteUser(id) {
    return this.http.get(`http://localhost:3030/people/deleteuser`);
  }

}
