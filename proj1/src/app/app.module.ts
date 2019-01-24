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
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BookingComponent } from './views/booking/booking.component';
import { AdvertisementComponent } from './components/advertisement/advertisement.component';
import { TokenInterceptor } from './services/token.service';

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
    AdvertisementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ShowHidePasswordModule.forRoot(),
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
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
