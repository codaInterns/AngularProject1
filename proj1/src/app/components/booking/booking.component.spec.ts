import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingComponent } from './booking.component';
import {HttpClientModule} from "@angular/common/http"
import { TicketCardComponent } from '../ticket-card/ticket-card.component';

import { RouterTestingModule } from '@angular/router/testing';


describe('BookingComponent', () => {
  let component: BookingComponent;
  let fixture: ComponentFixture<BookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientModule,
        RouterTestingModule,       
        
     ],
      declarations: [ BookingComponent,
      TicketCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
