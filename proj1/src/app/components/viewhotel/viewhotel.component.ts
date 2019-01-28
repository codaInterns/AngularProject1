import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AddHotelService } from '../../services/addHotel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewhotel',
  templateUrl: './viewhotel.component.html',
  styleUrls: ['./viewhotel.component.css']
})
export class ViewhotelComponent implements OnInit {


  constructor(private addhotel: AddHotelService, private route: Router, private http: HttpClient) { }
  products: any = [{}];
  ngOnInit() {

    this.getProducts();
  }
  getProducts() {
    this.products = [];
    this.addhotel.getProducts().subscribe((data: {}) => { console.log(+data); this.products = data; });
  }


}
