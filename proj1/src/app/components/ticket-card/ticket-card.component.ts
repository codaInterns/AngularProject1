import { Component, OnInit, Input } from '@angular/core';
import { BookServiceService } from 'src/app/services/book-service.service';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-card',
  templateUrl: './ticket-card.component.html',
  styleUrls: ['./ticket-card.component.css']
})
export class TicketCardComponent implements OnInit {

  ticket:any;

  constructor(private myService:BookServiceService,private routes:Router) { }

  ngOnInit() {
    this.ticket = this.myService.getDetails();
  }

  onConfirmBook(){
    console.log("booked");
    this.myService.bookTicket(this.ticket).subscribe(
      (data: HttpResponse<any>) => {
        if(data.status == 200){
          this.routes.navigate(['/ticketBooked']);
        }
      },
      error => {
        console.log("Invalid response"); 
        alert('Please Login before Booking');
        this.routes.navigate(['/login']);      
      });
    //this.myservice.bookTicket()
  }
}
