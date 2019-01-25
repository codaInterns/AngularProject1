import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FlightsComponent } from './flights.component';

describe('FlightsComponent', () => {
  let component: FlightsComponent;
  let fixture: ComponentFixture<FlightsComponent>;
  let submitEl = fixture.debugElement.query(By.css('.col-12'));
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Setting enabled to false disables the submit button', () => {
    
    component.onResultUpdate(event);
    fixture.detectChanges();
    submitEl=fixture.debugElement.query(By.css('app-flight-search-result'));
    expect(submitEl.nativeElement.enabled).toBeTruthy();
});
});
