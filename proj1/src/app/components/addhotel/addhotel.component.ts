import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AddhotelService } from '../../services/addhotel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addhotel',
  templateUrl: './addhotel.component.html',
  styleUrls: ['./addhotel.component.css']
})
export class AddhotelComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private route:Router,private http:HttpClient,private addhotel:AddhotelService,private formBuilder:FormBuilder) { }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      hotel_name: ['', Validators.required],
      hotel_description: ['', Validators.required],
      hotel_place: ['', [Validators.required]],
      hotel_image: ['', [Validators.required]],
      price: ['', Validators.required]
  });
}

// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }
  
  model: any = {};
  onSubmit() {
   // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model.value))
   
   this.addhotel.postUser(this.model);
   //console.log(this.model);
   this.submitted = true;

   this.route.navigate(['/app-viewhotel']);
  }

}

