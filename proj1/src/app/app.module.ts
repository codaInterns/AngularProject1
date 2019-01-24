import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ReactiveFormsModule} from '@angular/forms';
<<<<<<< HEAD
import {Routes,RouterModule} from '@angular/router';
import { UserloginComponent } from "./components/userlogin/userlogin.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
=======
import { RouterModule, Routes} from '@angular/router';

import { AddhotelComponent } from "./components/addhotel/addhotel.component";
import { HttpClientModule } from "@angular/common/http";
>>>>>>> 2fc39efaa2bd457812686bca6a1d1eaa6170199e

import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { ModalModule } from "ngx-bootstrap/modal";

import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
<<<<<<< HEAD
import { TicketCardComponent } from "./components/ticket-card/ticket-card.component";
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BookingComponent } from './views/booking/booking.component';
import { AdvertisementComponent } from './components/advertisement/advertisement.component';
import { TokenInterceptor } from './services/token.service';
=======
import { SearchhotelComponent } from './Components/searchhotel/searchhotel.component';
import { HeaderComponent } from './Components/header/header.component';

import {MatTabsModule} from '@angular/material/tabs'; 
import {MatNativeDateModule} from '@angular/material';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material-module';
import { ViewhotelComponent } from './Components/viewhotel/viewhotel.component';


>>>>>>> 2fc39efaa2bd457812686bca6a1d1eaa6170199e

const appRoutes: Routes = [
  {
    path: "app-searchhotel",
    component: SearchhotelComponent
  },
  {
    path:"app-addhotel",
    component: AddhotelComponent

  },
  {
<<<<<<< HEAD
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
=======
    path:"app-viewhotel",
    component: ViewhotelComponent
  }
  
>>>>>>> 2fc39efaa2bd457812686bca6a1d1eaa6170199e
];


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
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
=======
    AddhotelComponent,
    SearchhotelComponent,
    HeaderComponent,
    ViewhotelComponent
>>>>>>> 2fc39efaa2bd457812686bca6a1d1eaa6170199e
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
<<<<<<< HEAD
    ShowHidePasswordModule.forRoot(),
=======
    MatTabsModule,    
>>>>>>> 2fc39efaa2bd457812686bca6a1d1eaa6170199e
    RouterModule.forRoot(appRoutes),
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    NgbModule.forRoot(),
    FormsModule,
<<<<<<< HEAD
    AngularFontAwesomeModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
=======
    BrowserAnimationsModule,
    DemoMaterialModule,
>>>>>>> 2fc39efaa2bd457812686bca6a1d1eaa6170199e
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
