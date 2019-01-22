import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { FlightService } from 'src/app/services/flight.service';

const states = [
  'Chennai','Madurai','Coimbatore','Mumbai','Noida','Nepal','Hyderabad','Himalayas'
];

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  @ViewChild('class') class:ElementRef;
  @ViewChild('type') type:ElementRef;
  @ViewChild('passCount') passCount:ElementRef;

  @Output('search') searchResult = new EventEmitter<{
    searchForm:any,
    class:any,
    type:any,
    passCount:any
  }>();

  searchValue:{searchForm:any,class:any,type:any,passCount:any};
  serviceValue:{source:string,destination:string,departure:string};
  resValue:any;

  search = (text$: Observable<String>) => 
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? [] :
        states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0,10))
      )

  constructor(private myservice:FlightService) { }

  ngOnInit() {
  }

  onSubmit(searchForm:any){
    this.searchValue = {
      searchForm:searchForm,
      class:this.class.nativeElement.value,
      type:this.type.nativeElement.value,
      passCount:this.passCount.nativeElement.value
    };
    this.serviceValue = {
      source:searchForm.from,
      destination:searchForm.to,
      departure:"testing"
    };
    this.searchResult.emit(this.searchValue);
    this.myservice.getFlights(this.serviceValue).subscribe(res=>{this.resValue=res});
  }

}
