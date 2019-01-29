import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailService } from 'src/app/email.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  constructor(private router: Router, private formBuilder: FormBuilder, private email: EmailService) { }
  get f() { return this.formdata.controls; }


  submitted = false;
  formdata;
  result;


  ngOnInit() {
    this.formdata = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$'
      )]],
      password: ['', [Validators.required, Validators.pattern('(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,}')]]
    });
  }

  onClickSubmit(data) {
    console.log(data.email);

    this.submitted = true;
    if (this.formdata.invalid) {
      return;
    }
    this.email.getUser(data.email, data.password).subscribe(res => {
      this.result = res; console.log(this.result);
      if (this.result === true) {
        alert('Login Sucessful');
        this.router.navigate(['flights']);
      } else {
        alert('Login Not Sucessful');
        this.router.navigate(['register']);

        return false;
      }
    });



  }






}