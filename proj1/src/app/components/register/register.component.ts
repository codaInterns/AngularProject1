import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import{RegisterServiceService} from '../../services/register-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   formdata;
   customerdata;
  constructor(private http:HttpClient,private registerServe:RegisterServiceService , private route : Router) { }

  
  stateCtrl:FormControl;

  ngOnInit() {
    this.formdata=new FormGroup({
      email:new FormControl("",Validators.compose([
        Validators.required,
        Validators.email
      ])),
       password:new FormControl("",Validators.minLength(6)),
       //confirmPassword:new FormControl("",this.checkpassword)
      });
  }
  userdata; 
  
onClickSubmit(data) {

  alert("register successfully");
 
 this.registerServe.postUser(data.email,data.password);
 this.route.navigate(['/']);
 //console.log(this.userdata);
}

}
