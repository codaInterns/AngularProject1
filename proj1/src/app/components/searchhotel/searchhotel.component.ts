import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AddHotelService } from '../../services/addHotel.service';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup,Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-searchhotel',
  templateUrl: './searchhotel.component.html',
  styleUrls: ['./searchhotel.component.css']
})
export class SearchHotelComponent implements OnInit {
  isSetForm: boolean = false;
  products: any = [];
  value:any;
  searchForm:FormGroup;

  constructor(private addHotel: AddHotelService, private route: Router, private http: HttpClient,private fb:FormBuilder) { } 

  ngOnInit() {
    this.searchForm = this.fb.group({
      hotel_place:['',Validators.required]
    });

   }
  
  onSubmit(value) {
      console.log(value.hotel_place)
      this.addHotel.getProduct(value).subscribe(data => {
      this.isSetForm = true;
      this.products = data;
    });

  } 
}

