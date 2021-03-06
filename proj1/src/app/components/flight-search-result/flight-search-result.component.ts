import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BookServiceService } from 'src/app/services/book-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-search-result',
  templateUrl: './flight-search-result.component.html',
  styleUrls: ['./flight-search-result.component.css']
})
export class FlightSearchResultComponent implements OnInit {

  @Input('flight') details:any;

  constructor(private myservice:BookServiceService,private routes:Router) { }
 
  ngOnInit() {
  }

  onBook(){
    this.myservice.setDetails(this.details);
    this.routes.navigate(['/booked']);
  }

}
