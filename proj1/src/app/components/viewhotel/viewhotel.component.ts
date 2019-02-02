import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddHotelService } from '../../services/addhotel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewhotel',
  templateUrl: './viewhotel.component.html',
  styleUrls: ['./viewhotel.component.css']
})
export class ViewHotelComponent implements OnInit {

  products:any = [{}];
  
  constructor(private addHotel:AddHotelService,private route:Router,private http:HttpClient) { }
  
  ngOnInit() {
    this.getProducts();  
  }
 
  getProducts() {
    this.products = [];
    this.addHotel.getProducts().subscribe((data: {}) => {
    this.products = data;
    });
  }
  
  
}