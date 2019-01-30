import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyComp4Component } from './dummy-comp4.component';

describe('DummyComp4Component', () => {
  let component: DummyComp4Component;
  let fixture: ComponentFixture<DummyComp4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DummyComp4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyComp4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
