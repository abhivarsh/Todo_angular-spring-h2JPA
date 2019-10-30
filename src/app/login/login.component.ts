import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../services/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private router: Router,
    private auth: HardcodedAuthenticationService
  ) {}
  username = 'pabhivarshnv';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  handleLogin() {
    if (this.auth.authenticate(this.username, this.password)) {
      console.log(this.username);
      this.invalidLogin = false;
      this.router.navigate(['welcome', this.username]);
    } else {
      this.invalidLogin = true;
    }
  }
}
