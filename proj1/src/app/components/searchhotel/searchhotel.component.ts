import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AddHotelService } from 'src/app/services/addhotel.service';

@Component({
  selector: 'app-searchhotel',
  templateUrl: './searchhotel.component.html',
  styleUrls: ['./searchhotel.component.css']
})
export class SearchHotelComponent implements OnInit {

  constructor(private addHotel:AddHotelService,private route:Router,private http:HttpClient) { }
  
  setForm:boolean=false;
  products:any = [];
  model: any = {};

  ngOnInit() {
  }
  
  onSubmit() {  
    this.addHotel.getProduct(this.model).subscribe(data => {
      this.setForm=true;
      this.products = data
    });
    
  }

  
  
}
