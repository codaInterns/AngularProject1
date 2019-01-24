import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import {ReactiveFormsModule} from '@angular/forms';
import {Routes,RouterModule} from '@angular/router';
import { UserloginComponent } from "./components/userlogin/userlogin.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";


import { FlightSearchComponent } from "./components/flight-search/flight-search.component";
import { CardsComponent } from "./components/cards/cards.component";
import { NavFeatureComponent } from "./components/nav-feature/nav-feature.component";
import { FlightsComponent } from "./views/flights/flights.component";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { ModalModule } from "ngx-bootstrap/modal";
import { FlightSearchResultComponent } from "./components/flight-search-result/flight-search-result.component";
import { FooterComponent } from "./components/footer/footer.component";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { TicketCardComponent } from "./components/ticket-card/ticket-card.component";
import { BookingComponent } from './views/booking/booking.component';
import { AdvertisementComponent } from './components/advertisement/advertisement.component';
import { BookedComponent } from './components/booked/booked.component';

const appRoutes: Routes = [
  {

    path : "flights",
    component: FlightsComponent
  },
  {
    path: "login",
   component : UserloginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "booked",
    component: BookingComponent
  },
  {
    path: "flights/:from/:to",
    component: FlightsComponent
  },
  {
    path: "ticketBooked",
    component: BookedComponent
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
    AdvertisementComponent,
    BookedComponent
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
    FormsModule
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
