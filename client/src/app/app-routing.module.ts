import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {RestaurantsListComponent} from './components/restaurants-list/restaurants-list.component';
import {RestaurantFormComponent} from './components/restaurant-form/restaurant-form.component';
const routes: Routes = [
  {path: '',
  redirectTo: '/restaurants',
  pathMatch: 'full'
  },
  {
  path:'restaurants',
  component: RestaurantsListComponent
  },
  {
  path:'restaurants/add',
  component: RestaurantFormComponent
  },
  {
    path:'restaurants/edit/:id',
    component: RestaurantFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
