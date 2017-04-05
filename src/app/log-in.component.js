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
var router_1 = require("@angular/router");
var user_service_1 = require("./user.service");
var authentication_service_1 = require("./authentication.service");
var common_1 = require("@angular/common");
var LogInComponent = (function () {
    function LogInComponent(authService, userService, location, route, router) {
        this.authService = authService;
        this.userService = userService;
        this.location = location;
        this.route = route;
        this.router = router;
        this.loading = false;
        this.loginError = false;
        this.isEmptyNickname = false;
        this.isEmptyPassword = false;
    }
    LogInComponent.prototype.ngOnInit = function () {
        this.loading = true;
        this.authService.logout();
        this.route.params.subscribe(function () {
            window.scrollTo(0, 0);
        });
        this.loading = false;
    };
    LogInComponent.prototype.attemptLogin = function (nickname, password) {
        var _this = this;
        if (!nickname || !password) {
            if (!nickname) {
                this.isEmptyNickname = true;
            }
            if (!password) {
                this.isEmptyPassword = true;
            }
            return;
        }
        else {
            this.userService.getUser(nickname)
                .then(function (user) {
                _this.user = user[0];
                if (_this.authService.login(password, _this.user)) {
                    _this.router.navigate(['jokes']);
                }
                else {
                    // Return "username/password" error on form
                    _this.loginError = true;
                }
            });
        }
    };
    LogInComponent.prototype.checkIfEmpty = function (event) {
        if (event.target.value != null) {
            this.isEmptyNickname = false;
        }
    };
    LogInComponent.prototype.checkIfEmpty2 = function (event) {
        if (event.target.value != null) {
            this.isEmptyPassword = false;
        }
    };
    LogInComponent.prototype.goBack = function () {
        this.isEmptyNickname = false;
        this.isEmptyPassword = false;
        this.location.back();
    };
    return LogInComponent;
}());
LogInComponent = __decorate([
    core_1.Component({
        selector: "log-in",
        templateUrl: "./log-in.component.html"
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService,
        user_service_1.UserService,
        common_1.Location,
        router_1.ActivatedRoute,
        router_1.Router])
], LogInComponent);
exports.LogInComponent = LogInComponent;
//# sourceMappingURL=log-in.component.js.map