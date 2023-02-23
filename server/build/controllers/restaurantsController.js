"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.restaurantsController = void 0;
const databaseParameters_1 = require("../databaseParameters");
class RestaurantsController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, databaseParameters_1.connect)();
            const selectQuery = {
                text: 'SELECT * FROM restaurants'
            };
            try {
                const rest = yield databaseParameters_1.pool.query(selectQuery);
                console.log('Data Retrieved');
                res.json(rest.rows);
            }
            catch (err) {
                console.error("Error retrieving restaurant", err);
            }
            yield (0, databaseParameters_1.release)();
        });
    }
    getOneRestaurant(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, databaseParameters_1.connect)();
            const { id } = req.params;
            const id_number = Number(id);
            const selectWhereQuery = {
                text: 'SELECT * FROM restaurants WHERE "Id" = $1',
                values: [id_number]
            };
            try {
                const oneRest = yield databaseParameters_1.pool.query(selectWhereQuery);
                console.log('Retrieved one successful.');
                res.json(oneRest.rows);
            }
            catch (err) {
                console.error("getOneRest", err);
            }
            yield (0, databaseParameters_1.release)();
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const insertQuery = {
                text: 'INSERT INTO restaurants("Name","Location","Reviews","Description","Main_Dish") VALUES($1,$2,$3,$4,$5)',
                values: [req.body.Name, req.body.Location, req.body.Reviews, req.body.Description, req.body.Main_Dish]
            };
            yield (0, databaseParameters_1.connect)();
            yield databaseParameters_1.pool.query(insertQuery, (err, res) => {
                if (err) {
                    console.error('Error executing query:', err.stack);
                }
                else {
                    console.log('INSERT successful.');
                }
            });
            yield (0, databaseParameters_1.release)();
            res.json({ text: 'Restaurant Save' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const id_number = Number(id);
            const deleteQuery = {
                text: 'DELETE FROM restaurants WHERE "Id" = $1',
                values: [id_number]
            };
            yield (0, databaseParameters_1.connect)();
            yield databaseParameters_1.pool.query(deleteQuery, (err, res) => {
                if (err) {
                    console.error('Error executing query:', err.stack);
                }
                else {
                    console.log('Delete successful.');
                }
            });
            yield (0, databaseParameters_1.release)();
            res.json({ text: 'Restaurant Delete' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const id_number = Number(id);
            const updateQuery = {
                text: 'UPDATE restaurants SET "Name" = $1,"Location"=$2,"Reviews" = $3,"Description" = $4,"Main_Dish" = $5 WHERE "Id" = $6',
                values: [req.body.Name, req.body.Location, req.body.Reviews, req.body.Description, req.body.Main_Dish, id_number]
            };
            console.log(updateQuery);
            yield (0, databaseParameters_1.connect)();
            yield databaseParameters_1.pool.query(updateQuery, (err, res) => {
                if (err) {
                    console.error('Error executing query:', err.stack);
                }
                else {
                    console.log('Update successful.');
                }
            });
            yield (0, databaseParameters_1.release)();
            res.json({ text: ' Updating game' });
        });
    }
}
exports.restaurantsController = new RestaurantsController();
