import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import {ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { UserloginComponent } from './components/userlogin/userlogin.component';
import{HttpClientModule} from '@angular/common/http'

const appRoutes: Routes = [
  {
    path : '',
    component : UserloginComponent
  },
  {
    path : 'register',
    component : RegisterComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RegisterComponent,
    UserloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
