/**
 * Created by rastislavbertusek on 06.03.17.
 */
"use strict";
var express = require("express");
var compression = require("compression");
var body_parser_1 = require("body-parser");
var list_1 = require("./routes/basket/list");
var calculate_1 = require("./routes/basket/calculate");
var basket_receipt_generator_1 = require("./routes/basket/basket-receipt-generator");
var app = express();
exports.app = app;
app.disable('x-powered-by');
app.use(body_parser_1.json());
app.use(compression());
app.set('view engine', 'jade');
// api routes
app.use('/', basket_receipt_generator_1.basketReceiptGeneratorRouter);
app.use('/api/v1/basket', calculate_1.basketCalculateRouter);
app.use('/api/v1/basket/list', list_1.basketListRouter);
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        error: {},
        message: err.message
    });
});
