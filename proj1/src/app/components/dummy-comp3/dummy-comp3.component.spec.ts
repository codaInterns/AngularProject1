
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyComp3Component } from './dummy-comp3.component';

describe('DummyComp3Component', () => {
  let component: DummyComp3Component;
  let fixture: ComponentFixture<DummyComp3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DummyComp3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyComp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
