import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewhotelComponent } from './viewhotel.component';

describe('ViewhotelComponent', () => {
  let component: ViewhotelComponent;
  let fixture: ComponentFixture<ViewhotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewhotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewhotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
