import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './components/header/header.component';
import { RestaurantsListComponent } from './components/restaurants-list/restaurants-list.component';

import {RestaurantService} from './services/restaurant.service'

import {HttpClientModule} from '@angular/common/http';
import { RestaurantFormComponent } from './components/restaurant-form/restaurant-form.component'

import {FormsModule} from '@angular/forms'




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RestaurantsListComponent,
    RestaurantFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
 
  ],
  providers: [
    RestaurantService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
