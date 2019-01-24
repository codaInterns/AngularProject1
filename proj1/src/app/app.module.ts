import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ReactiveFormsModule} from '@angular/forms';
import {Routes,RouterModule} from '@angular/router';
import { UserloginComponent } from "./components/userlogin/userlogin.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { ModalModule } from "ngx-bootstrap/modal";
import {RegisterComponent} from './components/register/register.component';
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { TicketCardComponent } from "./components/ticket-card/ticket-card.component";
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BookingComponent } from './views/booking/booking.component';
import { TokenInterceptor } from './services/token.service';
//import { SearchhotelComponent } from './Components/searchhotel/searchhotel.component';
//import { HeaderComponent } from './Components/header/header.component';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import { ViewhotelComponent } from './Components/viewhotel/viewhotel.component';
import {FlightsComponent} from './views/flights/flights.component';
import {DashboardComponent} from './views/dashboard/dashboard.component';
import {FlightSearchComponent} from './components/flight-search/flight-search.component';
import {FlightSearchResultComponent} from './components/flight-search-result/flight-search-result.component';
import {CardsComponent} from './components/cards/cards.component';
import {NavFeatureComponent} from './components/nav-feature/nav-feature.component';
import {FooterComponent} from './components/footer/footer.component';
//import {AddhotelComponent} from './components/addhotel/addhotel.component';
import {MatTabsModule} from '@angular/material/tabs';
import { LandingComponent } from './components/landing/landing.component';


const appRoutes: Routes = [
  {
    path : "",
    component : LandingComponent
  },
  // {
  //   path: "app-searchhotel",
  //   component: SearchhotelComponent
  // },
  // {
  //   path:"app-addhotel",
  //   component: AddhotelComponent

  // },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "booked",
    component: BookingComponent
  },
  {
    path : "flights",
    component : FlightsComponent
  },
  {
    path: "flights/:from/:to",
    component: FlightSearchComponent
   },
   //{
  //   path:"app-viewhotel",
  //   component: ViewhotelComponent
  // },
  {
    path : "login",
    component : UserloginComponent

  }
  
];


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RegisterComponent,
    UserloginComponent,
    FlightSearchComponent,
    FlightSearchResultComponent,
    CardsComponent,
    NavFeatureComponent,
    FlightsComponent,
    FooterComponent,
    TicketCardComponent,
    BookingComponent,
    LandingComponent
    // AddhotelComponent,
    // SearchhotelComponent,
    // HeaderComponent,
    // ViewhotelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    NgbModule.forRoot(),
    FormsModule,
    AngularFontAwesomeModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    BrowserAnimationsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
