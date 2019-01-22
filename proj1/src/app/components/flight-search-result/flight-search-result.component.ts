import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flight-search-result',
  templateUrl: './flight-search-result.component.html',
  styleUrls: ['./flight-search-result.component.css']
})
export class FlightSearchResultComponent implements OnInit {

  @Input('flight') details:any;

  constructor() { }
 
  ngOnInit() {
  }

}
