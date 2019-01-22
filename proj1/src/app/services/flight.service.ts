import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class FlightService {
  constructor(private http: HttpClient) {}

  output:any;

  getFlights(searchDetails: any) {
    console.log("input"+searchDetails);
    return this.http.post("http://localhost:8080/api/getFlight/", searchDetails);
     
  }

  getHotDeals() {
    return this.http.get("http://localhost:8080/api/getFlights");
  }
}
