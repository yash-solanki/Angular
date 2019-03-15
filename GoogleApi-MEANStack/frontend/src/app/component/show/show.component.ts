import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IssueService } from '../../issue.service';
import { Issue } from '../../issue.model';
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  issues: Issue[];
  displayedColumn = ['name', 'phone'];

  constructor(private issueService: IssueService, private router: Router) { }

  ngOnInit() {
    this.fetchIssues();
  }

  fetchIssues() {
    this.issueService
      .getIssues()
      .subscribe((issues: Issue[]) => {
        this.issues = issues;
        console.log('data requested!!!');
        console.log(this.issues);
      });
  }

}
