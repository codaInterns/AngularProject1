import { Component, OnInit, Input } from '@angular/core';
import { BookServiceService } from 'src/app/services/book-service.service';

@Component({
  selector: 'app-ticket-card',
  templateUrl: './ticket-card.component.html',
  styleUrls: ['./ticket-card.component.css']
})
export class TicketCardComponent implements OnInit {

  ticket:any;

  constructor(private myservice:BookServiceService) { }

  ngOnInit() {
    this.ticket = this.myservice.getDetails();
  }

  onConfirmBook(){
    console.log("booked");
    this.myservice.bookTicket(this.ticket).subscribe(res=>{
      console.log(res);
      console.log(res.headers.get('Authentication'));
    });
    //this.myservice.bookTicket()
  }
}
