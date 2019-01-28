import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { HotDeals } from '../modals/hotDeals.modals';

@Injectable({
  providedIn: "root"
})
export class FlightService {

  token:any;
  output:any;

  constructor(private http: HttpClient) {}

  getFlights(searchDetails: any) {
    return this.http.post('http://localhost:8080/api/getFlight/', searchDetails);
  }

  getHotDeals() {
    return this.http.get<HotDeals[]>('http://localhost:8080/api/getFlights');
  }
}
