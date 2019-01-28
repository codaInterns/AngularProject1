import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHotelComponent } from './viewhotel.component';

describe('ViewhotelComponent', () => {
  let component: ViewHotelComponent;
  let fixture: ComponentFixture<ViewHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
