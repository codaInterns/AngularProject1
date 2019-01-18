import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   formdata;
   customerdata;
  constructor(private http:HttpClient) { }

  
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
 
 this.http.get("http://localhost:4200/api/user").subscribe(res=>{console.log(res);
   this.userdata=res});
 //console.log(this.userdata);
}

}
