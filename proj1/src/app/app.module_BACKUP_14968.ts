import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes} from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { UserloginComponent } from './components/userlogin/userlogin.component';

const appRoutes: Routes = [
  {
    path : '',
    component : UserloginComponent
  }
];

import { FlightSearchComponent } from './components/flight-search/flight-search.component';
import { CardsComponent } from './components/cards/cards.component';
import { NavFeatureComponent } from './components/nav-feature/nav-feature.component';
import { FlightsComponent } from './views/flights/flights.component';

const appRoutes: Routes = [
  {
     path: '',
     component: DashboardComponent
  },
  {
     path: 'app-fligts',
     component: FlightsComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
<<<<<<< HEAD
    UserloginComponent
    
  
=======
    FlightSearchComponent,
    FlightSearchResultComponent,
    CardsComponent,
    NavFeatureComponent,
FlightsComponent
>>>>>>> 98235108a064fd4c4a44995f44ccd3e89a463a46
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
=======
    BsDropdownModule.forRoot(),
RouterModule.forRoot(appRoutes)
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule
>>>>>>> 98235108a064fd4c4a44995f44ccd3e89a463a46
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
