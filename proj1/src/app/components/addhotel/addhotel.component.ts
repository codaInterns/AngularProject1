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

<<<<<<< .merge_file_a13148
  constructor(private route: Router, private http: HttpClient, private Addhotel: AddhotelService) { }
=======
  constructor(private route:Router,private http:HttpClient,private addhotel:AddhotelService ) { }
>>>>>>> .merge_file_a15324

  ngOnInit() {
  }
  model: any = {};
<<<<<<< .merge_file_a13148
<<<<<<< HEAD
  value:any
  onSubmit(data:any) {
    this.value=this.Addhotel.addHotels(data);
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(data))
    console.log(this.value)
=======
=======
>>>>>>> .merge_file_a15324

  onSubmit() {
   this.addhotel.postUser(this.model);
    this.route.navigate(['/app-header']);
<<<<<<< .merge_file_a13148
>>>>>>> 90c0c41fb4dc16560ae7101580a76bca51d901cd
=======
>>>>>>> .merge_file_a15324
  }

}
