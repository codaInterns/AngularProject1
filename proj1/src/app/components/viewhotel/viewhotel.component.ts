import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddhotelService } from '../../services/addhotel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewhotel',
  templateUrl: './viewhotel.component.html',
  styleUrls: ['./viewhotel.component.css']
})
export class ViewhotelComponent implements OnInit {

  constructor(private addhotel:AddhotelService,private route:Router,private http:HttpClient) { }
  products:any = [{}];
  ngOnInit() {
    console.log("im view")
    
    this.getProducts();
     console.log(this.products)
  }
  
  getProducts() {
    console.log("hiiiiiiiiiii");
    this.products = [];
    this.addhotel.getProducts().subscribe((data: {}) => {console.log("hello"+data);this.products = data;});
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
