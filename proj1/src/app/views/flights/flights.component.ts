import { Component, OnInit } from '@angular/core';
import { HotDealsService } from 'src/app/services/hot-deals.service';
import { FlightService } from 'src/app/services/flight.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
  
  isFlightAvailable:boolean=false;
  flightDetails:any;
  isNoResult:boolean;
  isInvalidInput: boolean;
  userFrom:any;
  userTo:any;

  constructor(private routes:ActivatedRoute) { }

  ngOnInit() {
    this.userFrom = this.routes.snapshot.params['from'];
    this.userTo = this.routes.snapshot.params['to'];
  }

  onResultUpdate(event:any){
    if(event==null){
      this.isInvalidInput=true;
      return;
    }
    else{
      this.isInvalidInput=false;
    }
   
    this.isFlightAvailable = true;
    this.flightDetails = event;

    if(this.flightDetails.length==0)
      this.isNoResult=true;
    else
      this.isNoResult=false;
  }

}
