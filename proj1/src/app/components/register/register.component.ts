import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RegisterServiceService } from '../../services/register-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formdata:FormGroup;
  customerdata;
  submitted= false;
  constructor(private http: HttpClient,private formBuilder:FormBuilder,private registerServe: RegisterServiceService, private route: Router) { }


  stateCtrl: FormControl;

  ngOnInit() {
    this.formdata = this.formBuilder.group({
      
      email: ["",[Validators.required,Validators.pattern("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$"
      )]],
      password:["",[Validators.required,Validators.pattern("(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,}"

      )]]
      
    });
  }
  get f() { return this.formdata.controls; }
  userdata;

  onClickSubmit(data) {
    this.submitted=true;
    
    if (this.formdata.invalid) {
      return;
  }
  this.registerServe.postUser(data.email, data.password);
  alert("register successfully");
  this.route.navigate(['/']);
  }

  
    //console.log(this.userdata);
  }


