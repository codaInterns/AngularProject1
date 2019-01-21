import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes} from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
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
    CardsComponent,
    NavFeatureComponent,
FlightsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
