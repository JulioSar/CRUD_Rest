import { Component, OnInit } from '@angular/core';
import {Restaurant} from '../../models/Restaurant'
import { RestaurantService } from 'src/app/services/restaurant.service';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.component.html',
  styleUrls: ['./restaurant-form.component.css']
})
export class RestaurantFormComponent implements OnInit {

  restaurant:Restaurant | any = {
    id: 0,
    Name: '',
    Location: '',
    Reviews: 0, 
    Description: '',
    Main_Dish: '',
  };
  edit: boolean = false;
  constructor(private restaurantService: RestaurantService, private router: Router, private activedRoute: ActivatedRoute) {}

  ngOnInit(){
     const params = this.activedRoute.snapshot.params;
     if (params['id']){
      console.log(params['id'])
      const num_id = Number(params['id']);
      this.restaurantService.getOneRestaurant(num_id).subscribe({
              next: (v) => {
                console.log(v), 
                this.restaurant = v
                this.edit = true;
                for(let restaurant of this.restaurant){
                  this.restaurant = restaurant;
                }
              },
              error: (e) => console.error(e),
              complete: () => {console.info('complete')}
    
            })

      
          }
    // console.log(params['Id']);
    // this.activedRoute.params.subscribe(params => {
    //   const id = params['id'];
    //   if (id) {

    //     const id_num = Number(id);
    //     this.restaurantService.getOneRestaurant(id_num).subscribe(res => {console.log(res);this.restaurant = res})
    //     // ({
    //     //   next: (v) => {console.log(v), this.restaurant = v},
    //     //   error: (e) => console.error(e),
    //     //   complete: () => {console.info('complete')}

    //     // })
    //   }
    // });
  }

  saveNewRestaurant(){
    delete this.restaurant.id;
    this.restaurantService.addRestaurant(this.restaurant).subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error(e),
      complete: () => {console.info('complete'), this.router.navigate(['/restaurants'])}
    })
  }

  updateRestaurant(){
    console.log(typeof this.restaurant.id)
    console.log(this.restaurant)
    this.restaurantService.updateRestaurant(this.restaurant,this.restaurant.Id).subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error(e),
      complete: () => {console.info('complete'), this.router.navigate(['/restaurants'])}
      })
    }

}
