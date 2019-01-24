import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  private details:any;

  token:any;

  constructor(private http:HttpClient) { }

  setDetails(details:any){
    console.log(details);
    this.details = details;
  }

  getDetails(){
    return this.details;
  }

  bookTicket(bookDetails:any){
    this.token = localStorage.getItem('token');
    const headers= new HttpHeaders({
      'token':this.token
    })
    return this.http.post("http://localhost:8080/JwtAuth/book/",bookDetails,{headers:headers});
  }
}
