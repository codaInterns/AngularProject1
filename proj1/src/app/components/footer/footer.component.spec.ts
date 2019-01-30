import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { CardsComponent } from '../cards/cards.component';
import { FlightService } from 'src/app/services/flight.service';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent, CardsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    fixture.debugElement.injector.get(FlightService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
