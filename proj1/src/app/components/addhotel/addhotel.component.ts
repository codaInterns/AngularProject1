import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AddhotelService } from '../../services/addhotel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addhotel',
  templateUrl: './addhotel.component.html',
  styleUrls: ['./addhotel.component.css']
})
export class AddhotelComponent implements OnInit {

  constructor(private route:Router,private http:HttpClient) { }

  ngOnInit() {
  }
  model: any = {};

  onSubmit() {
   // this.addhotel.postUser(this.model);

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
    console.log(this.model.hotel_name)
  }

}
