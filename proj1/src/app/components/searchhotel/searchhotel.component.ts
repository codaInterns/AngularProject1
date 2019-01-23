import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchhotel',
  templateUrl: './searchhotel.component.html',
  styleUrls: ['./searchhotel.component.css']
})
export class SearchhotelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
   list1:any[]=[
     {
       hotel_name:"Turyaa",
     hotel_description:"hello",
     hotel_price:13000,
     hotel_location:"chennai",
     hotel_image:"https://www.rwsentosa.com/-/media/project/non-gaming/rwsentosa/hotels/hard-rock-hotel-singapore/hardrockhotelsg-exterior.jpg?mh=666&la=en&h=666&w=1366&mw=1366&hash=7890A13D2C4FE83769F4A571B997007215155027"
   }
   ]
   
  
  
}
