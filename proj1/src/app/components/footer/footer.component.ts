import { Component, OnInit } from "@angular/core";
import { FlightService } from "src/app/services/flight.service";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  city: any;

  constructor(private myservice: FlightService) {}

  ngOnInit() {
    this.myservice.getHotDeals().subscribe(res => {
      this.city = res;
      console.log(res);
    });
  }
}
