import { Component, OnInit } from '@angular/core';

import { NotificationHandler } from 'src/app/services/notification-handler.service';
import { Observable, Subscription } from 'rxjs';
import { trigger, style, state, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  animations: [
    trigger('fadeInOut',[
      state('void',style({
        opacity:0
      })),
      transition('void<=>*',animate(1000))
    ])
  ]
})

export class NotificationComponent implements OnInit {

  isNotificationAvailable:boolean=false;

  alertValue:{
    type:string,
    msg:string
  };

  constructor(private notificationService:NotificationHandler) { }

  ngOnInit() {
    this.notificationService.alert.subscribe((res)=>{
      if(res){
        this.alertValue = res;
        this.isNotificationAvailable = true;
        setTimeout(()=>{
          this.isNotificationAvailable = false;
        },2000);
      }
    });
    }
  
}


