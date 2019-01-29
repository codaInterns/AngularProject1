import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayPartComponent } from './overlay-part.component';

describe('OverlayPartComponent', () => {
  let component: OverlayPartComponent;
  let fixture: ComponentFixture<OverlayPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
