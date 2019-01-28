import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { HotDeals } from 'models/HotDeals';

@Injectable({
  providedIn: "root"
})
export class FlightService {
  constructor(private http: HttpClient) {}

  token:any;
  output:any;

  getFlights(searchDetails: any) {
  
    console.log("input"+searchDetails);
    return this.http.post("http://localhost:8080/api/getFlight/", searchDetails);
     
  }

  getHotDeals() {
    return this.http.get<HotDeals[]>("http://localhost:8080/api/getFlights");
  }
}
