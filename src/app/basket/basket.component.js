"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var BasketComponent = (function () {
    function BasketComponent(appStore) {
        var _this = this;
        this.appStore = appStore;
        this.isLoading = true;
        this.unsubscribeFromStore = this.appStore.subscribe(function (state) {
            _this.receipt = state.receipt;
            _this.isLoading = !!_this.receipt;
        });
    }
    BasketComponent.prototype.ngOnInit = function () {
        this.isLoading = true;
    };
    BasketComponent.prototype.ngOnDestroy = function () {
        this.unsubscribeFromStore();
    };
    return BasketComponent;
}());
BasketComponent = __decorate([
    core_1.Component({
        selector: 'basket-list',
        styleUrls: ['basket.component.css'],
        templateUrl: 'basket.component.html'
    })
], BasketComponent);
exports.BasketComponent = BasketComponent;
//# sourceMappingURL=basket.component.js.map