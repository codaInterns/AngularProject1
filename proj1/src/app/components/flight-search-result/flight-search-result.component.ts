import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BookServiceService } from 'src/app/services/book-service.service';

@Component({
  selector: 'app-flight-search-result',
  templateUrl: './flight-search-result.component.html',
  styleUrls: ['./flight-search-result.component.css']
})
export class FlightSearchResultComponent implements OnInit {

  @Input('flight') details:any;

  constructor(private myservice:BookServiceService) { }
 
  ngOnInit() {
  }

  onBook(){
    this.myservice.setDetails(this.details);
  }

}
