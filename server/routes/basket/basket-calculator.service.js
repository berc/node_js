/**
 * Created by rastislavbertusek on 06.03.17.
 */
"use strict";
var prices_1 = require("../../data/prices");
var _ = require("lodash");
var BasketCalculator = (function () {
    function BasketCalculator() {
    }
    BasketCalculator.prototype.generateBasketReceipt = function (basketItems) {
        var _this = this;
        var items = {};
        basketItems.forEach(function (o) { _this.increaseItemCount(items, o); });
        var calcItems = [];
        Object.keys(items).forEach(function (name) { calcItems.push({ name: name, count: items[name] }); });
        var totalSum = this.calculateSum(calcItems);
        return {
            items: calcItems,
            totalSum: totalSum
        };
    };
    BasketCalculator.prototype.increaseItemCount = function (items, item) {
        if (!items[item]) {
            items[item] = 1;
        }
        else {
            items[item] = items[item] + 1;
        }
    };
    BasketCalculator.prototype.calculateSum = function (basketItems) {
        var _this = this;
        var acc = 0;
        basketItems.forEach(function (o) {
            o.sumPrice = _this.calculatePrice(o);
            acc = acc + o.sumPrice;
        });
        return acc;
    };
    BasketCalculator.prototype.calculatePrice = function (item) {
        var price = _.find(prices_1.prices, function (p) { return p.name === item.name; });
        if (!price) {
            return;
        }
        item.unitPrice = price.price;
        this.calculateDiscount(item, price);
        return item.reducedCount * price.price;
    };
    BasketCalculator.prototype.calculateDiscount = function (item, price) {
        item.reducedCount = item.count;
        if (!price.discount) {
            return;
        }
        var floorCount = Math.floor(item.count / price.discount.count);
        if (!floorCount) {
            return;
        }
        item.reducedCount = (floorCount * price.discount.reduceTo)
            + (item.count % price.discount.count);
    };
    return BasketCalculator;
}());
exports.BasketCalculator = BasketCalculator;
