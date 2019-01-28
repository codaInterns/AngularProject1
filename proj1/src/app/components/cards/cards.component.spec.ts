import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CardsComponent } from "./cards.component";
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';

describe("CardsComponent", () => {
  let component: CardsComponent;
  let fixture: ComponentFixture<CardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule,RouterModule],
      declarations: [CardsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
