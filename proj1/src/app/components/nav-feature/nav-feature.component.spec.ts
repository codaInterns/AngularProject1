import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavFeatureComponent } from './nav-feature.component';

describe('NavFeatureComponent', () => {
  let component: NavFeatureComponent;
  let fixture: ComponentFixture<NavFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavFeatureComponent ],
     
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
