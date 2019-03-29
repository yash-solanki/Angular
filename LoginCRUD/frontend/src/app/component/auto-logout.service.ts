import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';

const MINUTES_UNTIL_AUTO_LOGOUT = 0.10; // in mins
const CHECK_INTERVAL = 1000; // in ms
const STORE_KEY = 'lastAction';

@Injectable({
  providedIn: 'root'
})
export class AutoLogoutService {
  constructor(private authService: AuthService) {
    this.check();
    this.initListener();
    this.initInterval();
  }

  get lastAction() {
    return parseInt(localStorage.getItem(STORE_KEY));
  }

  set lastAction(value) {
    localStorage.setItem(STORE_KEY, String(value));
  }

  initListener() {
    document.body.addEventListener('click', () => this.reset());
    document.body.addEventListener('mousemove', () => this.reset());
    document.body.addEventListener('keypress', () => this.reset());
  }

  reset() {
    this.lastAction = Date.now();
  }
  initInterval() {
    setInterval(() => {
      if (this.authService.loggedIn()) {

      this.check();
      }
    }, CHECK_INTERVAL);
  }

  check() {
    const now = Date.now();
    const timeleft = this.lastAction + MINUTES_UNTIL_AUTO_LOGOUT * 60 * 1000;
    const diff = timeleft - now;
    console.log(diff);
    const isTimeout = diff < 0;
    if (isTimeout && this.authService.loggedIn()) {
      console.log(this.authService.loggedIn());
      this.authService.logoutUser();
    }
  }
}
