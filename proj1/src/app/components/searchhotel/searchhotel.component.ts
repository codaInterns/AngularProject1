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

  ngOnInit() {
    
  }
   
  model: any = {};

  onSubmit() {
    //this.addhotel.postUser(this.model);

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
    console.log(this.model.hotel_location)
  }

  
  
}
