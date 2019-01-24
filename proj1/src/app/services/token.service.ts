import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  token:any;  

  constructor(public auth: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("interceptor");
    this.token =this.auth.getToken();
    console.log(this.token);

    if(this.token){
        request = request.clone({
            setHeaders: {
              Authorization: `Bearer ${this.auth.getToken()}`
            }
        });
        return next.handle(request);
    }

    return next.handle(request);
  }
}