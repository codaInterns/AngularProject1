import { Component, OnInit } from '@angular/core';
import { FlightService } from 'src/app/services/flight.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  city: any;

  constructor(private myService: FlightService) { }

  ngOnInit() {
    this.myService.getHotDeals().subscribe(res => {
      this.city = res;
      
    });
  }
}
