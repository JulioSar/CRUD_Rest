"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const restaurantsController_1 = require("../controllers/restaurantsController");
class Restaurants {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', restaurantsController_1.restaurantsController.list);
        this.router.post('/', restaurantsController_1.restaurantsController.create);
        this.router.delete('/:id', restaurantsController_1.restaurantsController.delete);
        this.router.put('/:id', restaurantsController_1.restaurantsController.update);
        this.router.get('/:id', restaurantsController_1.restaurantsController.getOneRestaurant);
    }
}
const restaurants = new Restaurants();
exports.default = restaurants.router;
