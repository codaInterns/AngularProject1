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

  
  flightAvailable:boolean=false;
  flightDetails:any;
  noResult:boolean;
  invalidInput: boolean;
  userFrom:any;
  userTo:any;

  constructor(private routes:ActivatedRoute) { }
  

  ngOnInit() {
    this.userFrom = this.routes.snapshot.params['from'];
    this.userTo = this.routes.snapshot.params['to'];
    console.log(this.routes);
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
