import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = 'pabhivarshnv';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  handleLogin() {
    if (this.username === 'pabhivarshnv' && this.password === 'dummy') {
      console.log(this.username);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }
}
