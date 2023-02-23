import express,{Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes/indexRoutes';
import restaurants from './routes/restaurants';

class Server {

    public app: Application;

    constructor(){
       this.app = express();
       this.config();
       this.routes();
    }

    config():void{
        this.app.set('port',process.env.PORT || 3000);
        this.app.use(morgan('dev')); // let dev check requests on terminal 
        this.app.use(cors());
        this.app.use(express.json()); // pass json data between front and back 
    }

    routes():void{
        this.app.use(indexRoutes);
        this.app.use('/api/restaurants',restaurants);

    }

    start():void{
        this.app.listen(this.app.get('port'),() => {
            console.log("Server on port: " , this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();