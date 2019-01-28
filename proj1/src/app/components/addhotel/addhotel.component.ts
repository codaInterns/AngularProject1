import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AddHotelService } from '../../services/addHotel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addhotel',
  templateUrl: './addhotel.component.html',
  styleUrls: ['./addhotel.component.css']
})
export class AddhotelComponent implements OnInit {



  get f() { return this.registerForm.controls; }
  registerForm: FormGroup;
  isSubmitted = false;
  model: any = {};
  constructor(private route: Router, private http: HttpClient, private addHotel: AddHotelService, private formBuilder: FormBuilder) { }


  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      hotel_name: ['', Validators.required],
      hotel_description: ['', Validators.required],
      hotel_place: ['', [Validators.required]],
      hotel_image: ['', [Validators.required]],
      price: ['', Validators.required]
    });
  }

  onSubmit() {
    this.addHotel.postUser(this.model);
    this.isSubmitted = true;
    this.route.navigate(['/app-viewhotel']);
  }

}

