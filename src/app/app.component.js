"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var authentication_service_1 = require("./authentication.service");
var AppComponent = (function () {
    function AppComponent(render, auth) {
        var _this = this;
        this.render = render;
        this.auth = auth;
        this.AppName = "Jok'z Project";
        this.isLogged = false;
        //Listen to scroll to apply css to header
        this.render.listenGlobal('window', 'scroll', function (evt) { _this.isScrolled(); });
        //Listen to login to adapt header menu
        this.auth.loggedSource$.subscribe(function (bool) { _this.isLogged = bool, _this.getStorage(bool); });
    }
    AppComponent.prototype.ngOnInit = function () {
        //Check storage on init to avoid login
        this.checkStorage();
    };
    AppComponent.prototype.isScrolled = function () {
        if (window.scrollY != 0) {
            return true;
        }
        else {
            return false;
        }
    };
    AppComponent.prototype.checkStorage = function () {
        if (sessionStorage.getItem("nickname")) {
            this.username = sessionStorage.getItem("nickname");
            this.picture = sessionStorage.getItem("picture");
            var admin = sessionStorage.getItem("isAdmin");
            if (admin == "true") {
                this.isAdmin = true;
            }
            else {
                this.isAdmin = false;
            }
            this.isLogged = true;
        }
    };
    AppComponent.prototype.getStorage = function (bool) {
        if (bool) {
            this.username = sessionStorage.getItem("nickname");
            this.picture = sessionStorage.getItem("picture");
            var admin = sessionStorage.getItem("isAdmin");
            if (admin == "true") {
                this.isAdmin = true;
            }
            else {
                this.isAdmin = false;
            }
        }
    };
    AppComponent.prototype.logOut = function () {
        this.auth.logout();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        templateUrl: "./app.component.html"
    }),
    __metadata("design:paramtypes", [core_1.Renderer,
        authentication_service_1.AuthenticationService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map