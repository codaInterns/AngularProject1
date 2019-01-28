import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightSearchResultComponent } from './flight-search-result.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('FlightSearchResultComponent', () => {
  let component: FlightSearchResultComponent;
  let fixture: ComponentFixture<FlightSearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule,RouterTestingModule],
      declarations: [ FlightSearchResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
