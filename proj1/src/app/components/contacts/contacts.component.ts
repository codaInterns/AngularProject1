import { Component, OnInit, ElementRef, Input, SimpleChanges, OnChanges, EventEmitter, Output } from '@angular/core';
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
  user;
  curVal;
  change;
  submitting=false;
  @Input('user') value: any;
  @Output() result = new EventEmitter<any>();
  name = false;
  emailid = false;
  constructor(private formBuilder: FormBuilder, private route: Router) { }

  
  ngOnInit() {
    
    this.formdata = this.formBuilder.group({
      detcard: this.formBuilder.array([this.createDetCard()])
    });
     
    //console.log(this.formdata.controls.detcard.controls[0].controls.userName);
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if(changes.value.currentValue===undefined){
      console.log("nothing");
    }
    else{
    for (let propName in changes) {
      this.change = changes[propName];
      this.curVal =this.change.currentValue;
      this.submitting=true;
      console.log(this.curVal);
      this.autoFill();
    }
  }
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
    this.result.emit( this.detcard.value);
    
    /*for (let card of this.detcard.controls) {
      var item = card as FormGroup;
      console.log(item);
      console.log("submit");
    }*/
    
  }


  autoFill() {
    if(this.submitting===false){
      return;
    }
    this.formdata = new FormGroup({
      detcard: new FormArray(this.curVal.map(item => {
        const group = this.createDetCard();
        group.patchValue(item);
        return group;
      }))
    });
  }

}

