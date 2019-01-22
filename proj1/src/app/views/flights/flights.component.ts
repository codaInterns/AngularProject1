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
  flightAvailable:boolean=false;
  flightDetails:any;
  
  constructor() { }
  

  ngOnInit() {
    
  }

  onResultUpdate(event:any){
    //console.log(this.flightDetails);
    this.flightAvailable = true;
    this.flightDetails = event;
    //console.log(this.flightDetails);
    console.log(event);
  }


}
