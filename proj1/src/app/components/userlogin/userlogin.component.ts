import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { EmailService } from 'src/app/email.service';
import { jsonpCallbackContext } from '@angular/common/http/src/module';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {


  loginChec

  formdata;
  constructor(private router:Router,private email:EmailService) { }
  

  ngOnInit() {
    this.formdata=new FormGroup({
      email:new FormControl("",Validators.compose([
        Validators.required,
        Validators.email
      ])),
      password:new FormControl("",this.passwordvalidation)
    });
  }



passwordvalidation(formcontrol){
  if(formcontrol.value.length<5){
    return{"password":true};
  }
}
result:any;
onClickSubmit(data){
  console.log(data.email);
  

  this.email.getUser(data.email,data.password).subscribe(
    res=>{this.result=res;}
  );

console.log(this.result);

  // if(this.result.email=="systemadmin@gmail.com" && data.password=="admin123")
  // {
  //   alert("login successful");
    
  // } else{
  //   alert("invalid");
  //   this.router.navigate(['register'])
  //   return false;
  // }
  
}






}