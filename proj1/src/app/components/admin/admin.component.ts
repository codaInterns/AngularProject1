import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { UserService } from './../../services/User';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {
  user: any;
  constructor(private myservice: UserService) { }

  ngOnInit() {


  }
  autoFill() {
    this.user = this.myservice.getUsers();
  }

  onUpdate(event) {
    console.log("updated form: ");
    console.log(event);
    var details = JSON.stringify(event);
    console.log(details);

  }






}
