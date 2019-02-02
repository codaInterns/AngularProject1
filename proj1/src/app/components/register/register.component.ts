import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RegisterServiceService } from '../../services/register-service.service';
import { Router } from '@angular/router';
import { checkAndUpdatePureExpressionDynamic } from '@angular/core/src/view/pure_expression';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formData:FormGroup;
  customerData;
  isSubmitted= false;
  userData;
  constructor(private http: HttpClient,private formBuilder:FormBuilder,private registerServe: RegisterServiceService, private route: Router) { }


  stateCtrl: FormControl;

  ngOnInit() {
    this.formData = this.formBuilder.group({
      
      email: ["",[Validators.required,Validators.pattern("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$"
      )]],
      password:["",[Validators.required,Validators.pattern("(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,}"

      )]],
    }
      
    );
  }
  get f() { return this.formData.controls; } 
  onClickSubmit(data) {
    this.isSubmitted=true;    
    if (this.formData.invalid) {
      return;
  }
  this.registerServe.postUser(data.email, data.password);
  alert("register successfully");
  this.route.navigate(['/']);
  }   
  }


