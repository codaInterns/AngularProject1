import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) {
  }

  public getUser(email: String, password: String) {
    const options = {
      userEmail: email,
      userPassword: password
    };
    return this.http.post('http://localhost:8080/api/jwt/', options, { responseType: 'text' });
  }
}
