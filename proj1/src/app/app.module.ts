import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
<<<<<<< HEAD
import { RegisterComponent } from './components/register/register.component';
=======
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
>>>>>>> 18159731645d6e5025ca33d4194af91471fb7458

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
<<<<<<< HEAD
    RegisterComponent
=======
    UserloginComponent
    
  
>>>>>>> 18159731645d6e5025ca33d4194af91471fb7458
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
