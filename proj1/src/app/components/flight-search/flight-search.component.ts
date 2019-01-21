import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  onSubmit(searchForm:any){
    this.searchValue = {
      searchForm:searchForm,
      class:this.class.nativeElement.value,
      type:this.type.nativeElement.value,
      passCount:this.passCount.nativeElement.value
    };
    this.searchResult.emit(this.searchValue);
  }

}
