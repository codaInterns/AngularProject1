import { Component, OnInit, ElementRef } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  formdata: FormGroup;
  detcard: FormArray;
  i: number;


  name = false;
  emailid = false;
  constructor(private formBuilder: FormBuilder, private route: Router) { }

  ngOnInit() {
    this.formdata = this.formBuilder.group({
      detcard: this.formBuilder.array([this.createDetCard()])
    });
    //console.log(this.formdata.controls.detcard.controls[0].controls.userName);
  }

  onDelete(i) {
    console.log("removing:" + i);
    this.detcard = this.formdata.get('detcard') as FormArray;
    this.detcard.removeAt(i);
  }
  createDetCard(): FormGroup {
    console.log("form getting created");
    return this.formBuilder.group({
      userName: ["", [Validators.required, Validators.pattern(/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/)]],
      email: ["", [Validators.required, Validators.pattern(/^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,}$/)]]
    })
  };

  addDetCard(): void {
    this.detcard = this.formdata.get('detcard') as FormArray;
    this.detcard.push(this.createDetCard());
  }


  /* onKeyEmail(event,eid:any){
     var pattern1=/^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,}$/;
     var emid=eid.value;
     if(pattern1.test(emid)){ 
         this.emailid=true;
     }
     else
       { console.log(this.emailid);
         this.emailid=false;}
   }

   onKeyUser(event,mid:any){
     var pattern=/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/;
     var userval=mid.value;
     //console.log(userval);
      if (pattern.test(userval)){
        this.name= true;
      }
     else
        this.name=false;
     }*/
  onSubmit() {
    if (this.formdata.invalid) {
      return;
    }
    this.detcard = this.formdata.get('detcard') as FormArray;
    var result: any[];
    console.log("submitting....");
    for (let card of this.detcard.controls) {
      var item = card as FormGroup;
      var userName = item.controls.userName as FormControl;
      console.log(userName.value);

    }
  }
}