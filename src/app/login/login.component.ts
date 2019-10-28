import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}
  username = 'pabhivarshnv';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  handleLogin() {
    if (this.username === 'pabhivarshnv' && this.password === 'dummy') {
      console.log(this.username);
      this.invalidLogin = false;
      this.router.navigate(['welcome', this.username]);
    } else {
      this.invalidLogin = true;
    }
  }
}
