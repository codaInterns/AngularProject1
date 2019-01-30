import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RegisterServiceService } from '../../services/register-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { checkAndUpdatePureExpressionDynamic } from '@angular/core/src/view/pure_expression';
import { CustomNotificationService } from 'src/app/services/custom-notification.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formdata:FormGroup;
  customerdata:any;
  submitted= false;
  errorMsg:string;

  constructor(private http: HttpClient,private formBuilder:FormBuilder,private registerServe: RegisterServiceService, 
              private route: Router,private routes:ActivatedRoute,private notificationService:CustomNotificationService) { }


  stateCtrl: FormControl;

  ngOnInit() {
    this.formdata = this.formBuilder.group({
      
      email: ["",[Validators.required,Validators.pattern("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$"
      )]],
      password:["",[Validators.required,Validators.pattern("(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,}"

      )]],
    } 
    );
  }
  get f() { return this.formdata.controls; }
  userdata;

  onClickSubmit(data) {
    this.submitted=true;
    
    if (this.formdata.invalid) {
      return;
  }
  this.registerServe.postUser(data.email, data.password);
  this.notificationService.notify("success","Registration Successfull");
  this.route.navigate(['/']);
  }

  }


