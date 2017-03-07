/**
 * Created by rastislavbertusek on 06.03.17.
 */
"use strict";
var express_1 = require("express");
var basket_items_1 = require("../../data/basket-items");
var basket_calculator_service_1 = require("./basket-calculator.service");
var basketCalculateRouter = express_1.Router();
exports.basketCalculateRouter = basketCalculateRouter;
basketCalculateRouter.get('/calculate', function (request, response) {
    var basketCalculator = new basket_calculator_service_1.BasketCalculator();
    var calculatedPrice = basketCalculator.generateBasketReceipt(basket_items_1.basketItems);
    response.json({ totalSum: calculatedPrice });
});
