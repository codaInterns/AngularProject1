import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
<<<<<<< HEAD
import { NavFeatureComponent } from './components/nav-feature/nav-feature.component';
import { CardsComponent } from './components/cards/cards.component';
=======
import { CardsComponent } from './components/cards/cards.component';
import { NavFeatureComponent } from './components/nav-feature/nav-feature.component';
import { FlightsComponent } from './views/flights/flights.component';
>>>>>>> 5ea25729a6018fcbcacded6412bfafeaf952b09e

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
<<<<<<< HEAD
    NavFeatureComponent,
    CardsComponent
=======
    CardsComponent,
    NavFeatureComponent,
FlightsComponent
>>>>>>> 5ea25729a6018fcbcacded6412bfafeaf952b09e
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
