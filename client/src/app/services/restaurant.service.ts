import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{Restaurant} from '../models/Restaurant'
@Injectable({
  providedIn: 'root'
})
export class RestaurantService {


  API_URI = 'http://localhost:3000/api'
  constructor(private http: HttpClient) { }

  getRestaurants(){
    return this.http.get(`${this.API_URI}/restaurants`);
  }

  addRestaurant(restaurant: Restaurant){
    return this.http.post(`${this.API_URI}/restaurants`,restaurant)

  }

  deleteRestaurant(id: number){
    return this.http.delete(`${this.API_URI}/restaurants/${id}`);
  }

  updateRestaurant(restaurant:Restaurant, id: number){
    return this.http.put(`${this.API_URI}/restaurants/${id}`,restaurant);
  }

  getOneRestaurant(id: number){
    return this.http.get(`${this.API_URI}/restaurants/${id}`);
  }
}
