import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http:HttpClient) { }

   public getUser(email:String,password:String){
    var userData = {
      email : email,
      password : password
        
    };
    return this.http.post("http://localhost:8080/api/jwt/",userData,{responseType: 'text'});
  }
}
