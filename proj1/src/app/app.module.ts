import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { RouterModule, Routes} from '@angular/router';

import { AddhotelComponent } from "./components/addhotel/addhotel.component";
import { HttpClientModule } from "@angular/common/http";



import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { ModalModule } from "ngx-bootstrap/modal";

import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { SearchhotelComponent } from './Components/searchhotel/searchhotel.component';
import { HeaderComponent } from './Components/header/header.component';

import {MatTabsModule} from '@angular/material/tabs'; 
import {MatNativeDateModule} from '@angular/material';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material-module';
import { ViewhotelComponent } from './Components/viewhotel/viewhotel.component';



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
    path:"app-viewhotel",
    component: ViewhotelComponent

  },
];


@NgModule({
  declarations: [
    AppComponent,
    AddhotelComponent,
    SearchhotelComponent,
    HeaderComponent,
    ViewhotelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    MatTabsModule,    
    RouterModule.forRoot(appRoutes),
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    NgbModule.forRoot(),
    FormsModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
platformBrowserDynamic().bootstrapModule(AppModule);