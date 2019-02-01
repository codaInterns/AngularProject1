import { Component, OnInit, Input } from '@angular/core';
import { BookServiceService } from 'src/app/services/book-service.service';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { CustomNotificationService } from 'src/app/services/custom-notification.service';

@Component({
  selector: 'app-ticket-card',
  templateUrl: './ticket-card.component.html',
  styleUrls: ['./ticket-card.component.css']
})
export class TicketCardComponent implements OnInit {

  ticket: any;

  constructor(private myService: BookServiceService, private routes: Router, private notification: CustomNotificationService) { }

  ngOnInit() {
    this.ticket = this.myService.getDetails();
  }

  onConfirmBook() {
    this.myService.bookTicket(this.ticket).subscribe(
      (data: HttpResponse<any>) => {
        if (data.status === 200) {
          this.routes.navigate(['/ticketBooked']);
        }
      },
      error => {
        this.notification.notify('failure', 'Please Login Before Booking !');
        this.routes.navigate(['/login']);
      });
  }
}
