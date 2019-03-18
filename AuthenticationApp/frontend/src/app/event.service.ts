import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private eventUrl = 'http://localhost:4040/api/events';
  private specialEventsUrl = 'http://localhost:4040/api/special';

  constructor(private http: HttpClient ) { }

  getEvents() {
    return this.http.get<any>(this.eventUrl);
  }

  getSpecialEvents() {
    return this.http.get<any>(this.specialEventsUrl);
  }

}
