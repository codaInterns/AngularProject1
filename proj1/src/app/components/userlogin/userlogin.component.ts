import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  formdata;
  constructor(private router:Router) { }
  

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

onClickSubmit(data){
  console.log(data.email);
  
  if(data.email=="systemadmin@gmail.com" && data.password=="admin123")
  {
    alert("login successful");
    
  } else{
    alert("invalid");
    this.router.navigate(['app-register'])
    return false;
  }
  
}
}