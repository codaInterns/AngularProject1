import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http:HttpClient) {

   }

   public getUser(email:String,password:String){
     return this.http.get("http://localhost:8080/api/users/"+email+"/"+password);

   }
}
