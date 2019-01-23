import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { FlightService } from 'src/app/services/flight.service';

const states = [
  'chennai','Madurai','Coimbatore','Mumbai','Noida','Nepal','Hyderabad','Himalayas'
];

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {


  @Input() fromValue:string;
  @Input() toValue:string;

  @ViewChild('class') class:ElementRef;
  @ViewChild('type') type:ElementRef;
  @ViewChild('passCount') passCount:ElementRef;

  @Output() result = new EventEmitter<any>();

  serviceValue:{source:string,destination:string,departure:string};
  resValue:any;

  isdisabled:any;
 
  search = (text$: Observable<String>) => 
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? [] :
        states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0,10))
      )

  constructor(private myservice:FlightService) { }
        today;
  ngOnInit() {
    this.today = new Date();
    console.log(this.fromValue);
  }
  output:any;
  onSubmit(searchForm:any){
    
    if(searchForm.from==null || searchForm.to==null)
      {
        this.result.emit(null);
        return;
      }
    this.serviceValue = {
      source:searchForm.from.toLowerCase(),
      destination:searchForm.to.toLowerCase(),
      departure:searchForm.dateValue
    };
    
    console.log(this.serviceValue.source);

    
    this.myservice.getFlights(this.serviceValue).subscribe(res => {
      this.result.emit(res);
    });

   
    
  }

  isSame(){
    if(this.fromValue == this.toValue){
      this.isdisabled = true;
      return true;
    }
    this.isdisabled = false;
    return false;
        
  }

}
