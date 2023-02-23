import {Router} from 'express';
import {restaurantsController} from '../controllers/restaurantsController';

class Restaurants {

    public router: Router = Router();

    constructor(){

        this.config();

    }

    config(){
        this.router.get('/', restaurantsController.list);
        this.router.post('/',restaurantsController.create);
        this.router.delete('/:id',restaurantsController.delete)
        this.router.put('/:id',restaurantsController.update)
        this.router.get('/:id',restaurantsController.getOneRestaurant)

    }
}

const restaurants = new Restaurants();
export default restaurants.router;