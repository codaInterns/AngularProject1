import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  private details:any;

  constructor() { }

  setDetails(details:any){
    console.log(details);
    this.details = details;
  }
  getDetails(){
    return this.details;
  }
}
