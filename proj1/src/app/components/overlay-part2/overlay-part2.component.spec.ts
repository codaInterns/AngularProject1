import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayPart2Component } from './overlay-part2.component';

describe('OverlayPart2Component', () => {
  let component: OverlayPart2Component;
  let fixture: ComponentFixture<OverlayPart2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayPart2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayPart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
