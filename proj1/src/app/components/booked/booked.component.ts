import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/services/book-service.service';

@Component({
  selector: 'app-booked',
  templateUrl: './booked.component.html',
  styleUrls: ['./booked.component.css']
})
export class BookedComponent implements OnInit {

  isBooked:boolean;
  
  constructor(private myService:BookServiceService) { }

  ngOnInit() {
  
  }

}
