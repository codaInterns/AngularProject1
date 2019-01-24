import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailService } from 'src/app/email.service';
import { jsonpCallbackContext } from '@angular/common/http/src/module';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {


  submitted = false;
  formdata;
  constructor(private router: Router, private formBuilder: FormBuilder, private email: EmailService) { }


  ngOnInit() {
    this.formdata = this.formBuilder.group({
      email: ["", [Validators.required, Validators.pattern("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$"
      )]],
      password: ["", [Validators.required, Validators.pattern("(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,}")]]
    });
  }
  onKey(event)
  {
    var pattern = "";
    event.value
  }
  get f() { return this.formdata.controls; }
  result;
  onClickSubmit(data) {
    console.log(data.email);

    this.submitted = true;
    if (this.formdata.invalid) {
      return;
  }
    this.email.getUser(data.email, data.password).subscribe(res => {
    this.result = res; console.log(this.result);
    localStorage.setItem('token',this.result);
      /*if (this.result == true) {
        alert("Login Sucessful");
        this.router.navigate(['flights']);
      }
      else {
        alert("Login Not Sucessful");
        this.router.navigate(['register']);

        return false;
      }*/
    });



  }






}