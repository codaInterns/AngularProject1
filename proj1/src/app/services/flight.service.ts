import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  HotDeals: {
    flights_id: number,
    name: string,
    source: string,
    destination: string,
    departure: string,
    price: number
  };


  token: any;
  output: any;

  constructor(private http: HttpClient) { }

  getFlights(searchDetails: any) {
    return this.http.post('http://localhost:8080/api/getFlight/', searchDetails);
  }

  getHotDeals() {
    return this.http.get('http://localhost:8080/api/getFlights');
  }
}


