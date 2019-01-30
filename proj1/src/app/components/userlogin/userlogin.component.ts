import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailService } from 'src/app/email.service';
import { jsonpCallbackContext } from '@angular/common/http/src/module';
import { SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit , OnChanges {

  @Input() componentName:any;
  
  isPristine = true;
  isSubmitted = false;
  formData:FormGroup;
  pwd;
  mid;
  isPasscheck = false;
  isEmailcheck = false;
  constructor(private router: Router, private formBuilder: FormBuilder, private email: EmailService) { 
  }
  hasClass(e1:any)
  {
    var classes = [];
    classes = e1.getAttribute('class').split(' ');
    if(classes.indexOf("ng-pristine")!= -1)
    return true;
    else
    return false;
  }

  ngOnInit() {
    
    this.formData = this.formBuilder.group({
      email: ["", [Validators.required, Validators.pattern(/^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,}$/
      )]],
      password: ["", [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/)]]
    });
    
    
  }
  ngOnChanges(changes: SimpleChanges){
    
  }
  onKeyEmail(event)
  {
    var pattern =  /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,}$/;    
    if(pattern.test(this.mid))
    {
      this.isEmailcheck = true;
    }
    else{
      console.log(this.mid);
      this.isEmailcheck = false;
    }
    console.log(this.formData.controls);
    
  }
  onKeyPassword(event)
  {
    var pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
    if(pattern.test(this.pwd))
    {
      this.isPasscheck = true;
    }
    else{
      this.isPasscheck = false;
    }
  }  
  get f() { return this.formData.controls; }
  
  result:any;
  onClickSubmit(data) {
    this.isSubmitted = true;
    if (this.formData.invalid) {
      return;
  }
    this.email.getUser(data.email, data.password).subscribe(res => {
    this.result = res;     

    if(this.result){
      localStorage.setItem('token',this.result);
      this.router.navigate(['/flights']);
    }
    else{
      alert('Invalid User! Please Register ');
      this.router.navigate(['/register']);
    }

    });



  }






}