import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  constructor( private http: HttpClient) { }

getIssues() {
  return this.http.get(`http://localhost:3000/contact`);
}

}
