
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyComp1Component } from './dummy-comp1.component';

describe('DummyComp1Component', () => {
  let component: DummyComp1Component;
  let fixture: ComponentFixture<DummyComp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DummyComp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyComp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
