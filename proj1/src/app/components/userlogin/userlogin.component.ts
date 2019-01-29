import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailService } from '../../services/login.service';


@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  formdata: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder, private email: EmailService) {
  }
  token: string;
  ngOnInit() {
    this.formdata = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(/^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,}$/
      )]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/)]]
    });
  }
  onClickSubmit(data) {
    if (this.formdata.invalid) {
      return;
    }
    this.email.getUser(data.email, data.password).subscribe(res => {
      this.token = res;
      if (this.token) {
        localStorage.setItem('token', this.token);
        this.router.navigate(['/flights']);
      } else {
        this.router.navigate(['/register']);
      }
    });
  }
}


