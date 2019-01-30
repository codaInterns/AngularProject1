import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from './../../services/User';
@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {
  formdata: FormGroup;
  detcard: FormArray;
  i: number;
  change;
  curVal;
  users: any;
  submitting = false;
  constructor(private formBuilder: FormBuilder, private route: Router, private myservice: UserService) { }

  ngOnInit() {
    this.formdata = this.formBuilder.group({
      detcard: this.formBuilder.array([this.createDetCard()])
    });

  }


  createDetCard(): FormGroup {
    return this.formBuilder.group({
      userName: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/)]],
      email: ['', [Validators.required, Validators.pattern(/^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,}$/)]]
    });
  }

  addDetCard(): void {
    this.detcard = this.formdata.get('detcard') as FormArray;
    this.detcard.push(this.createDetCard());
  }

  onDelete(i) {
    console.log('removing user:' + i);
    this.detcard = this.formdata.get('detcard') as FormArray;
    this.detcard.removeAt(i);
  }


  onSubmit() {
    if (this.formdata.invalid) {
      return;
    }
    this.detcard = this.formdata.get('detcard') as FormArray;
    const testing = JSON.stringify(this.detcard.value);
    console.log(testing);

  }


  autoFill() {
    this.users = this.myservice.getUsers();
    this.formdata = new FormGroup({
      detcard: new FormArray(this.users.map(item => {
        const group = this.createDetCard();
        group.patchValue(item);
        return group;
      }))
    });
  }

  reset() {
    this.formdata.reset();
  }

}
