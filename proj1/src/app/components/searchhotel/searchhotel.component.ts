import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddhotelService } from '../../services/addhotel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchhotel',
  templateUrl: './searchhotel.component.html',
  styleUrls: ['./searchhotel.component.css']
})
export class SearchhotelComponent implements OnInit {

  constructor(private addhotel:AddhotelService,private route:Router,private http:HttpClient) { }
  
  setform:boolean=false;
  products:any = [];

  ngOnInit() {
  
  }
  
  
  model: any = {};

  onSubmit() {
    //this.addhotel.postUser(this.model);

    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
    console.log(this.model.hotel_location)
    //this.addhotel.locationdata(this.model).subscribe((data: {}) => {console.log("hello"+data);this.products = data;});
    //this.addhotel.locationdata(this.model).subscribe((data: {}) => {console.log("hello"+data);this.products = data;});
    this.addhotel.getProduct(this.model).subscribe(data => {
      //console.log("xbxhxhxhxh"+data);
      this.setform=true;
      this.products = data
      console.log(this.products)
    });
    
  }

  
  
}
