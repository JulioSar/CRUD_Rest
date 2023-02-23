import {Router} from 'express';
import {indexController} from '../controllers/indexController';

class IndexRoutes {

    public router: Router = Router();

    constructor(){

        this.config();

    }

    config(){
        this.router.get('/',indexController.index); // Bring all the info from the indexController which shows all the data inside the databas
    }
}

const indexRoute = new IndexRoutes();
export default indexRoute.router;