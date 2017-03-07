/**
 * Created by rastislavbertusek on 06.03.17.
 */
"use strict";
var express_1 = require("express");
var basket_items_1 = require("../../data/basket-items");
var basket_calculator_service_1 = require("./basket-calculator.service");
var basketReceiptGeneratorRouter = express_1.Router();
exports.basketReceiptGeneratorRouter = basketReceiptGeneratorRouter;
basketReceiptGeneratorRouter.get('', function (request, response) {
    var basketCalculator = new basket_calculator_service_1.BasketCalculator();
    var receipt = basketCalculator.generateBasketReceipt(basket_items_1.basketItems);
    response.render('receipt', { basket: receipt });
});
