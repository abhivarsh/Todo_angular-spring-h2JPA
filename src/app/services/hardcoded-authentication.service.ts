import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {
  constructor() {}

  authenticate(username, password) {
    if (username === 'pabhivarshnv' && password === 'dummy') {
      sessionStorage.setItem('authUser', username);
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authUser');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authUser');
  }
}
