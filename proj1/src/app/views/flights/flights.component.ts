import { Component, OnInit } from '@angular/core';
import { HotDealsService } from 'src/app/services/hot-deals.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  details:any[];

  constructor(private flight:HotDealsService) { }
  

  ngOnInit() {
    this.details=this.flight.getFlightDetails();
  }

}
