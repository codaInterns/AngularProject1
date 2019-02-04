import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
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
import { BookingComponent } from './views/booking/booking.component';
import { BookedComponent } from './components/booked/booked.component';
import { TokenInterceptor } from './services/token.service';
import { SearchHotelComponent } from './Components/searchhotel/searchhotel.component';
import { HeaderComponent } from './components/header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ViewHotelComponent } from './components/viewhotel/viewhotel.component';
import {FlightsComponent} from './views/flights/flights.component';
import {DashBoardComponent} from './views/dashboard/dashboard.component';
import {FlightSearchComponent} from './components/flight-search/flight-search.component';
import {FlightSearchResultComponent} from './components/flight-search-result/flight-search-result.component';
import {CardsComponent} from './components/cards/cards.component';
import {NavFeatureComponent} from './components/nav-feature/nav-feature.component';
import {FooterComponent} from './components/footer/footer.component';
import {AddHotelComponent} from './components/addhotel/addhotel.component';
import { LandingComponent } from './components/landing/landing.component';
import { OverlayPart2Component } from './components/overlay-part2/overlay-part2.component';
import { DummyComp1Component } from './components/dummy-comp1/dummy-comp1.component';
import { DummyComp2Component } from './components/dummy-comp2/dummy-comp2.component';
import { DummyComp3Component } from './components/dummy-comp3/dummy-comp3.component';
import { DummyComp4Component } from './components/dummy-comp4/dummy-comp4.component';
import { WizardComponent } from './components/wizard/wizard.component';
import { DragAndDropCardsComponent } from './components/drag-and-drop-cards/drag-and-drop-cards.component';
import {DragDropModule} from '@angular/cdk/drag-drop';


const appRoutes: Routes = [
  {
    path : "",
    component : LandingComponent
  },
  {
    path: "app-searchhotel",
    component: SearchHotelComponent
  },
  {
    path:"app-addhotel",
    component: AddHotelComponent

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
  },
  {
    path : "flights",
    component : FlightsComponent
  },
  {
    path:"app-viewhotel",
    component: ViewHotelComponent
  },
  {
    path : "login",
    component : UserloginComponent

 },
 {
   path:"dummy/comp1",
   component : DummyComp1Component
 },
 {
  path:"dummy/comp2",
  component : DummyComp2Component
},
{
  path:"dummy/comp3",
  component : DummyComp3Component
},
{
  path:"dummy/comp4",
  component : DummyComp4Component
}
  
];


@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    UserloginComponent,
    FlightSearchComponent,
    FlightSearchResultComponent,
    CardsComponent,
    NavFeatureComponent,
    FlightsComponent,
    FooterComponent,
    TicketCardComponent,
    BookingComponent,    
    BookedComponent,
    RegisterComponent,
    AddHotelComponent,
    SearchHotelComponent,
    HeaderComponent,
    ViewHotelComponent,
    LandingComponent,   
    OverlayPart2Component,
    DummyComp1Component,
    DummyComp2Component,
    DummyComp3Component,
    DummyComp4Component,
    WizardComponent,
    DragAndDropCardsComponent,
   
    
 

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
    BrowserAnimationsModule,
   DragDropModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS  ,
      useClass: TokenInterceptor,
      multi: true
    },
   
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
