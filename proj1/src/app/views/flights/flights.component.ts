import { Component, OnInit } from '@angular/core';
import { HotDealsService } from 'src/app/services/hot-deals.service';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  details:any[];
  ticketAvailable:boolean=false;
  ticketDetails:any;

  constructor(private flight:HotDealsService) { }
  

  ngOnInit() {
    this.details=this.flight.getFlightDetails();
  }

  onResultUpdate(event:any){
    this.ticketDetails = event;
    this.ticketAvailable = true;
  }

}
