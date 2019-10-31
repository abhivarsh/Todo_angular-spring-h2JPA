import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_URI, AUTH_USER, TOKEN } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {
  constructor(private http: HttpClient) {}

  executeAuthService(username, password) {
    let basicAuthHeaderString =
      'Basic ' + window.btoa(username + ':' + password);

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    });

    return this.http
      .get<AuthenticationBean>(`${API_URI}/basicauth`, { headers })
      .pipe(
        map(data => {
          sessionStorage.setItem(AUTH_USER, username);
          sessionStorage.setItem(TOKEN, basicAuthHeaderString);
          return data;
        })
      );
  }

  getAuthUser() {
    return sessionStorage.getItem(AUTH_USER);
  }

  getAuthToken() {
    if (this.getAuthUser()) {
      return sessionStorage.getItem(TOKEN);
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTH_USER);
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem(AUTH_USER);
    sessionStorage.removeItem(TOKEN);
  }
}
export class AuthenticationBean {
  constructor(public message: String) {}
}
