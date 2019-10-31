import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {
  constructor(private basicAuthService: BasicAuthenticationService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // let username = 'pabhivarshnv';
    // let password = 'dummy';
    // let basucAuthHeaderString =
    //   'Basic ' + window.btoa(username + ':' + password);

    let basicAuthHeaderString = this.basicAuthService.getAuthToken();
    let username = this.basicAuthService.getAuthUser();

    if (basicAuthHeaderString && username) {
      req = req.clone({
        setHeaders: {
          Authorization: basicAuthHeaderString
        }
      });
    }

    return next.handle(req);
  }
}
