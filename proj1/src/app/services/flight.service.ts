import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class FlightService {
  constructor(private http: HttpClient) {}

  token:any;
  output:any;

  getFlights(searchDetails: any) {
    this.token = localStorage.getItem('token');
    
    const headers = new HttpHeaders({
      'token':this.token
    });
  
    console.log("input"+searchDetails);
    
    return this.http.post("http://localhost:8080/api/getFlight/", searchDetails,{headers:headers});
     
  }

  getHotDeals() {
    return this.http.get("http://localhost:8080/api/getFlights");
  }
}
