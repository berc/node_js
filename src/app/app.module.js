"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var flex_layout_1 = require("@angular/flex-layout");
/*
 * Platform and Environment providers/directives/pipes
 */
var environment_1 = require("./environment");
var app_routes_1 = require("./app.routes");
// App is our top level component
var app_component_1 = require("./app.component");
var driver_1 = require("./driver");
var team_1 = require("./team");
var shared_1 = require("./shared");
var state_1 = require("./store/state");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [app_component_1.AppComponent],
        declarations: [app_component_1.AppComponent],
        imports: [
            driver_1.DriverModule, team_1.TeamModule, shared_1.SharedModule,
            platform_browser_1.BrowserModule, http_1.HttpModule,
            router_1.RouterModule.forRoot(app_routes_1.ROUTES, { useHash: true, preloadingStrategy: router_1.PreloadAllModules }),
            flex_layout_1.FlexLayoutModule.forRoot()
        ],
        providers: [
            environment_1.ENV_PROVIDERS,
            state_1.appStore
        ]
    })
], AppModule);
exports.AppModule = AppModule;
