import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedComponent } from './booked.component';
import { HttpClientModule } from '@angular/common/http';

describe('BookedComponent', () => {
  let component: BookedComponent;
  let fixture: ComponentFixture<BookedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      declarations: [ BookedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
