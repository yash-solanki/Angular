import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  constructor(private http: HttpClient) { }

  getIssues() {
    return this.http.get(`http://localhost:3000/issues`);
  }

  getIssueById(id) {
    return this.http.get(`http://localhost:3000/issues/${id}`);
  }

  addIssue(title, responsible, description, severity) {
    const issue = {
     title,
     responsible,
     description,
     severity
    };
    return this.http.post(`http://localhost:3000/issues/add`, issue);
  }

  updateIssue(id, title, responsible, description, severity, status) {
    const issue = {
      title,
      responsible,
      description,
      severity,
      status
    };
    return this.http.post(`http://localhost:3000/issues/update/${id}`, issue);
  }

  deleteIssue(id) {
    return this.http.get(`http://localhost:3000/issues/delete/${id}`);
  }

}
