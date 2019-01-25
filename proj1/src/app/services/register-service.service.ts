import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {
  result;
  constructor(private http:HttpClient) { }
  public postUser(email:String,password:String){
    var options = {
      email : email,
      password : password
        
    };
    return this.http.post("http://localhost:8080/api/register/",options).subscribe(res=>{this.result=res;console.log(this.result);});
  }
}
