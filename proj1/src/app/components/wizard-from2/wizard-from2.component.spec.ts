import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardFrom2Component } from './wizard-from2.component';

describe('WizardFrom2Component', () => {
  let component: WizardFrom2Component;
  let fixture: ComponentFixture<WizardFrom2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardFrom2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardFrom2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
