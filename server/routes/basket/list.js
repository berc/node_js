/**
 * Created by rastislavbertusek on 06.03.17.
 */
"use strict";
var express_1 = require("express");
var basket_items_1 = require("../../data/basket-items");
var basketListRouter = express_1.Router();
exports.basketListRouter = basketListRouter;
basketListRouter.get('/', function (request, response) {
    response.json(basket_items_1.basketItems);
});
