import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ReactiveFormsModule} from '@angular/forms';
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

    path : "",
    component:HeaderComponent
  },
  {
    path: "app-header",
    component: HeaderComponent
  }
  
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
