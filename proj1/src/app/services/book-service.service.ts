import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  private details:any;

  constructor(private http:HttpClient) { }

  setDetails(details:any){
    console.log(details);
    this.details = details;
  }

  getDetails(){
    return this.details;
  }

  bookTicket(bookDetails:any){
    return this.http.post("http://localhost:8080/jwt/book/",bookDetails);
  }
}
