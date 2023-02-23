import { Component, OnInit } from '@angular/core';
import {RestaurantService} from '../../services/restaurant.service'
import{Restaurant} from '../../models/Restaurant'


@Component({
  selector: 'app-restaurants-list',
  templateUrl: './restaurants-list.component.html',
  styleUrls: ['./restaurants-list.component.css']
})
export class RestaurantsListComponent implements OnInit {


  restaurants: any = [];
  constructor(private restaurantService: RestaurantService){}

  ngOnInit(){

    this.getRest();
  }

  getRest(){
    this.restaurantService.getRestaurants().subscribe({
      next: (v) => {this.restaurants = v},
      error: (e) => console.error(e),
      complete: () => console.info('Restaurants Retrieved') 
    })
  }

  deleteRestaurant(id:number) {

    this.restaurantService.deleteRestaurant(id).subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error(e),
      complete: () => {console.info('Restaurant Deleted');this.getRest(); }
    })
  }

  editRestaurant(id:number){

  }

}
