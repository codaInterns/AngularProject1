import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardFrom3Component } from './wizard-from3.component';

describe('WizardFrom3Component', () => {
  let component: WizardFrom3Component;
  let fixture: ComponentFixture<WizardFrom3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardFrom3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardFrom3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
