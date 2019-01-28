import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AddHotelService } from '../../services/addHotel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchhotel',
  templateUrl: './searchhotel.component.html',
  styleUrls: ['./searchhotel.component.css']
})
export class SearchHotelComponent implements OnInit {

  constructor(private addHotel: addHotelService, private route: Router, private http: HttpClient) { }  
  isSetForm: boolean = false;
  products: any = [];
  model: any = {};
  ngOnInit() {
  }
  onSubmit() {
      this.addHotel.getProduct(this.model).subscribe(data => {
      this.isSetForm = true;
      this.products = data;
    });

  }
}
