import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  token:any;      
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.token = localStorage.getItem('token');

    if(this.token && request.url=='http://localhost:8080/JwtAuth/book/'){
        const headers = new HttpHeaders({
            'token':this.token
        });

        request = request.clone({
            headers: headers
          });
          return next.handle(request);
    }

    return next.handle(request);
  }
}