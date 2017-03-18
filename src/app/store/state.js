/**
 * Created by rastislavbertusek on 06.03.17.
 */
"use strict";
// create factory to be called once angular has been bootstrapped
var angular2_redux_1 = require("angular2-redux");
var state_reducer_1 = require("state/state-reducer");
var appStoreFactory = function () {
    return new angular2_redux_1.AppStore(state_reducer_1.Reduser);
};
exports.appStore = {
    provide: angular2_redux_1.AppStore,
    useFactory: appStoreFactory
};
