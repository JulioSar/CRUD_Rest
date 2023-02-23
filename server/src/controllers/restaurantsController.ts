import {Request, Response} from 'express';
import {connect,release,pool} from '../databaseParameters'


class RestaurantsController{

  
    
    async list(req: Request, res: Response){
        await connect();
        
        const selectQuery = {
          text: 'SELECT * FROM restaurants'}
      
        try{
          const rest = await pool.query(selectQuery);   
          console.log('Data Retrieved');
          res.json(rest.rows);
        }catch(err){
          console.error("Error retrieving restaurant", err);
        }
        await release();

    }

    async getOneRestaurant(req: Request, res: Response){
      await connect();
      const {id} = req.params;
      const id_number = Number(id)
      const selectWhereQuery = {
        text: 'SELECT * FROM restaurants WHERE "Id" = $1',
        values:[id_number]
      }
      try{
        const oneRest = await pool.query(selectWhereQuery);

        console.log('Retrieved one successful.');
        res.json(oneRest.rows)
      }catch(err) {
        console.error("getOneRest",err)
      }

      await release()

    }
 
    async create(req: Request,res: Response){
      const insertQuery = {
        text: 'INSERT INTO restaurants("Name","Location","Reviews","Description","Main_Dish") VALUES($1,$2,$3,$4,$5)',
        values: [req.body.Name, req.body.Location, req.body.Reviews, req.body.Description, req.body.Main_Dish]
      };
      await connect();

      await pool.query(insertQuery, (err, res) => {
        if (err) { 
          console.error('Error executing query:', err.stack);
        } else { 
          console.log('INSERT successful.');

        }
      });
      await release()
      res.json({text:'Restaurant Save'})
 
    } 

    async delete(req: Request, res:Response){
      
      const {id} = req.params;
      const id_number = Number(id)
      const deleteQuery = {
        text:'DELETE FROM restaurants WHERE "Id" = $1',
        values:[id_number]
      };
      await connect();

      await pool.query(deleteQuery, (err, res) => {
        if (err) { 
          console.error('Error executing query:', err.stack);
        } else { 
          console.log('Delete successful.');

        }
      });
      await release()

      res.json({text: 'Restaurant Delete'});
    }

    async update(req: Request, res: Response){
      
      const {id} = req.params;
      const id_number = Number(id)
      const updateQuery = {
        text:'UPDATE restaurants SET "Name" = $1,"Location"=$2,"Reviews" = $3,"Description" = $4,"Main_Dish" = $5 WHERE "Id" = $6',
        values:[req.body.Name, req.body.Location, req.body.Reviews, req.body.Description, req.body.Main_Dish,id_number]
      };
      console.log(updateQuery);

      await connect();

      await pool.query(updateQuery, (err, res) => {
        if (err) { 
          console.error('Error executing query:', err.stack);
        } else { 
          console.log('Update successful.');
        }
      });
      await release()

      res.json({text: ' Updating game'});

    }
}

export const restaurantsController = new RestaurantsController();
