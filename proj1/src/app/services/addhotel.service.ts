import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddHotelService {

  endpoint = 'http://localhost:3000/api/v1/';
  result:any;

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  getProducts(): Observable<any> {
    return this.http.get('http://localhost:8080/api/gethotels').pipe(
      map(this.extractData));
  }

  public postUser(data:any){
    this.http.post('http://localhost:8080/api/addhotel/',data).subscribe(res=>
    {
      this.result=res;
      console.log(this.result);
    });
  }

  getProduct(data): Observable<any> {
    return this.http.post("http://localhost:8080/api/getHotel/",data)
  }
}
