import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FlightsComponent } from './flights.component';

describe('FlightsComponent', () => {
  let component: FlightsComponent;
  let fixture: ComponentFixture<FlightsComponent>;
  const submitEl = fixture.debugElement.query(By.css('.col-12'));
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
    component.noResult = true;
    fixture.detectChanges();
    expect(submitEl.nativeElement.disabled).toBeTruthy();
});
});
