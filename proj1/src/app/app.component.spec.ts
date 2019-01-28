import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {DashboardComponent} from './views/dashboard/dashboard.component';

import { Component } from '@angular/core';
import {NavFeatureComponent} from './components/nav-feature/nav-feature.component'
import {FooterComponent} from './components/footer/footer.component'
import { CardsComponent } from './components/cards/cards.component';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent,
        DashboardComponent,
        FooterComponent,
        NavFeatureComponent,
        CardsComponent


      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  
});
