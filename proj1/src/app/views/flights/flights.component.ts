import { Component, OnInit } from '@angular/core';
import { HotDealsService } from 'src/app/services/hot-deals.service';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  
  flightAvailable:boolean=false;
  flightDetails:any;
  noResult:boolean;
  invalidInput: boolean;
  constructor() { }
  

  ngOnInit() {
    
  }

  onResultUpdate(event:any){
    if(event==null){
      this.invalidInput=true;
      return;
    }
    else{
      this.invalidInput=false;
    }
    //console.log(this.flightDetails);
    this.flightAvailable = true;
    this.flightDetails = event;
    //console.log(this.flightDetails);
    console.log(event);
    if(this.flightDetails.length==0)
      this.noResult=true;
    else
      this.noResult=false;
  }


}
