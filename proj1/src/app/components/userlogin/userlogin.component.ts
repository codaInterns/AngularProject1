import { Component, OnInit, OnChanges } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";
import { Router } from "@angular/router";
import { EmailService } from "src/app/email.service";
import { jsonpCallbackContext } from "@angular/common/http/src/module";
import { SimpleChanges } from "@angular/core";
import { CustomNotificationService } from 'src/app/services/custom-notification.service';

@Component({
  selector: "app-userlogin",
  templateUrl: "./userlogin.component.html",
  styleUrls: ["./userlogin.component.css"]
})
export class UserloginComponent implements OnInit, OnChanges {
  pristine = true;
  submitted = false;
  formdata;
  pwd: any;
  mid: any;
  passcheck = false;
  emailcheck = false;
  isValid: boolean = true;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private email: EmailService,
    private notificationService:CustomNotificationService
  ) {}

  hasClass(e1: any) {
    var classes = [];
    classes = e1.getAttribute("class").split(" ");
    if (classes.indexOf("ng-pristine") != -1) return true;
    else return false;
  }

  ngOnInit() {
    this.formdata = this.formBuilder.group({
      email: [
        "",
        [
          Validators.required,
          Validators.pattern(/^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,}$/)
        ]
      ],
      password: [
        "",
        [
          Validators.required,
          Validators.pattern(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/
          )
        ]
      ]
    });
    console.log(this.formdata);
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
  onKeyEmail(event) {
    var pattern = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,}$/;

    if (pattern.test(this.mid)) {
      this.emailcheck = true;
    } else {
      console.log(this.mid);
      this.emailcheck = false;
    }
    console.log(this.formdata.controls);
  }
  onKeyPassword(event) {
    var pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
    if (pattern.test(this.pwd)) {
      this.passcheck = true;
    } else {
      this.passcheck = false;
    }
  }

  get f() {
    return this.formdata.controls;
  }
  result: any;
  onClickSubmit(data, formValue) {
    console.log(data.email);

    this.submitted = true;
    if (this.formdata.invalid) {
      return;
    }
    this.email.getUser(data.email, data.password).subscribe(res => {
      this.result = res;
      console.log(this.result);

      if (this.result) {
        localStorage.setItem("token", this.result);
        this.router.navigate(["/flights"]);
      } else {
        this.isValid = false;
        formValue.reset();
        this.notificationService.notify('failure','Login unsuccessfull!');
      }
    });
  }

  isValidUser(password, email) {
    if (!this.isValid) {
      if (password.dirty || email.dirty) {
        return false;
      } else {
        return true;
      }
    }
  }
}
