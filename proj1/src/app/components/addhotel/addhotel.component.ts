import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AddHotelService } from '../../services/addhotel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addhotel',
  templateUrl: './addhotel.component.html',
  styleUrls: ['./addhotel.component.css']
})
export class AddhotelComponent implements OnInit {
  registerForm: FormGroup;
  isSubmitted:boolean = false;
  model: any = {};
  constructor(private route:Router,private http:HttpClient,private addhotel:AddHotelService,private formBuilder:FormBuilder) { }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      hotel_name: ['', Validators.required],
      hotel_description: ['', Validators.required],
      hotel_place: ['', [Validators.required]],
      hotel_image: ['', [Validators.required]],
      price: ['', Validators.required]
  });
}

get f() { return this.registerForm.controls; }  
  onSubmit() {   
   this.addhotel.postUser(this.model);   
   this.isSubmitted = true;
   this.route.navigate(['/app-viewhotel']);
  }

}

