import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyComp2Component } from './dummy-comp2.component';

describe('DummyComp2Component', () => {
  let component: DummyComp2Component;
  let fixture: ComponentFixture<DummyComp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DummyComp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyComp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
