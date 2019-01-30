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
export class AddHotelComponent implements OnInit {
  registerForm: FormGroup;
  isSubmitted = false;
  value:any;  
  error:String="";
  isformvalid="true";

  constructor(private route:Router,private http:HttpClient,private addHotel:AddHotelService,private formBuilder:FormBuilder) { }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      hotel_name: ['', Validators.required],
      hotel_description: ['', Validators.required],
      hotel_place: ['', [Validators.required]],
      hotel_image: ['', [Validators.required]],
      price: ['', Validators.required]
  });

}

  perform(data){
    if(data.valid==false){
      this.error="*please enter the leftout fields";
    }else{
      this.error=" ";
    }  
  }
    
  onSubmit(value) {  
  console.log(JSON.stringify(value))
   if(this.registerForm.invalid){
    return;
   }else{
    this.addHotel.postUser(value);  
    this.isSubmitted = true;
    this.route.navigate(['/app-viewhotel']);
   }
   
  }

}

