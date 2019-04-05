import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SocialauthService } from '../socialauth.service';

@Component({
  selector: 'app-fetch-token',
  templateUrl: './fetch-token.component.html',
  styleUrls: ['./fetch-token.component.css']
})
export class FetchTokenComponent implements OnInit {
  token;
  code;
  constructor( private route: ActivatedRoute, private router: Router, private socialAuth: SocialauthService) { }

  ngOnInit() {
    this.getGoogleToken();
  }
  getGoogleToken() {
    this.token  = this.route.snapshot.queryParamMap.get('code');
    console.log(this.token);
    localStorage.setItem('gtoken', this.token);
    if (localStorage.getItem('gtoken')) {
      this.sentToken();
    }
    this.router.navigate(['/list']);
  }

  sentToken() {
    console.log('one');
    if ( !!localStorage.getItem('gtoken') ) {
      console.log('two');
      this.socialAuth.passToken( localStorage.getItem('gtoken'))
        .subscribe();
    }
  }

}
