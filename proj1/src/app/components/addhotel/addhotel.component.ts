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
  isSubmitted = false;
  value:any;  
  error:String="";
  isformvalid="true";

  constructor(private route:Router,private http:HttpClient,private addhotel:AddHotelService,private formBuilder:FormBuilder) { }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      hotel_name: ['', Validators.required],
      hotel_description: ['', Validators.required],
      hotel_place: ['', [Validators.required]],
      hotel_image: ['', [Validators.required]],
      price: ['', Validators.required]
  });
 // console.log(this.registerForm.value);
}

// convenience getter for easy access to form fields
  perform(data){
    if(data.valid==false){
      this.error="*please enter the leftout fields";
    }else{
      this.error=" ";
    }
    console.log("perform")
  }
  
  onSubmit(value) {  
  console.log(JSON.stringify(value))
   if(this.registerForm.invalid){
    console.log("please fill details")
   }else{
    this.addhotel.postUser(value);  
    this.isSubmitted = true;
    this.route.navigate(['/app-viewhotel']);
   }
   
  }

}

