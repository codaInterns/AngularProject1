import { Injectable, Output, EventEmitter } from '@angular/core';
import { NotificationHandler } from './notification-handler.service';

@Injectable({
  providedIn: 'root'
})
export class CustomNotificationService {


  alertValue:{
    type:string,
    msg:string
  };

  constructor(private service:NotificationHandler) { }

  notify(type:string,msg:string){
    this.alertValue = {
      type:type,
      msg:msg
    };
    this.service.alert.emit(this.alertValue);
    console.log(this.alertValue);
  }
}
