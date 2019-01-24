import { Component, OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs'; 
import{Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private mat:MatTabsModule,private router:Router) { }

  ngOnInit() {
  }

  onAddHotel(){
    console.log("sharrar");
   this.router.navigate[('app-addhotel')];

  } 
  onSearcHotel(){

  }
  OnViewHotelClick(){

  }
}
