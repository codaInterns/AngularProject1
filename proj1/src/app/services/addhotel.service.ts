import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AddhotelService {


  result;
  constructor(private http:HttpClient) { }
  public postUser(data){

    var result={
      hotel_name:data.hotel_name,
      hotel_description:data.hotel_description,
      hotel_image:data.hotel_image,
      hotel_price:data.hotel_price,
      hotel_location:data.hotel_location
    }
    console.log(result)
   

   // return this.http.post("http://localhost:8080/api/addhotel/",data).subscribe(res=>{this.result=res;console.log(this.result);});
  }
}
