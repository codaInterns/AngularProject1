import { Component, OnInit } from '@angular/core';
import { FormArray,FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
   formdata:FormGroup;
   detcard:FormArray;
  constructor(private formBuilder:FormBuilder, private route:Router) { }

  ngOnInit() {
   this.formdata=this.formBuilder.group({
     detcard:this.formBuilder.array([this.createDetCard()])
   });
  }

  createDetCard():FormGroup{
    return this.formBuilder.group({
      userName:["",Validators.required],
      email:["",Validators.required,Validators.email]
    })
  };

  addDetCard():void{
    this.detcard=this.formdata.get('detcard') as FormArray;
    this.detcard.push(this.createDetCard());
  }
  account_validation_messages = {
    'username': [
      { type: 'required', message: 'Username is required' },
      
    ],
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' }
    ],
    

}
}