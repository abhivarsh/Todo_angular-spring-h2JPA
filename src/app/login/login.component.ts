import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../services/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../services/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private router: Router,
    private auth: HardcodedAuthenticationService,
    private basicAuth: BasicAuthenticationService
  ) {}
  username = this.basicAuth.getAuthUser();
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  // handleLogin() {
  //   if (this.auth.authenticate(this.username, this.password)) {
  //     console.log(this.username);
  //     this.invalidLogin = false;
  //     this.router.navigate(['welcome', this.username]);
  //   } else {
  //     this.invalidLogin = true;
  //   }
  // }

  handleBasicAuthLogin() {
    this.basicAuth.executeAuthService(this.username, this.password).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['welcome', this.username]);
        this.invalidLogin = false;
      },
      error => {
        console.log(error);
        this.invalidLogin = true;
      }
    );
  }
}
