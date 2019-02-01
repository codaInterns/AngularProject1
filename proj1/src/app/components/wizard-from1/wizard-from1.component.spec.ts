import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardFrom1Component } from './wizard-from1.component';

describe('WizardFrom1Component', () => {
  let component: WizardFrom1Component;
  let fixture: ComponentFixture<WizardFrom1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardFrom1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardFrom1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
