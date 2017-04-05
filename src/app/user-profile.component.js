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
var common_1 = require("@angular/common");
var user_service_1 = require("./user.service");
var joke_service_1 = require("./joke.service");
require("rxjs/add/operator/switchMap");
var UserProfileComponent = (function () {
    function UserProfileComponent(UserService, route, location, jokeService) {
        this.UserService = UserService;
        this.route = route;
        this.location = location;
        this.jokeService = jokeService;
        this.loading = false;
        this.d = new Date();
        this.n = this.d.getTime();
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.route.params.subscribe(function () {
            window.scrollTo(0, 0);
        });
        this.route.params
            .switchMap(function (params) { return _this.UserService.getUser(params['name']); })
            .subscribe(function (user) { _this.user = user[0], _this.loading = false, _this.getRegistredTime(), _this.getJokes(_this.user.id); }, function () { return _this.loading = false; });
    };
    UserProfileComponent.prototype.setPicture = function () {
        if (this.user.picture != null) {
            return "url(" + this.user.picture + ")";
        }
        else {
            return "url(https://robohash.org/default.png?size=150x150&set=set2)";
        }
    };
    UserProfileComponent.prototype.getRegistredTime = function () {
        var delta = this.n - this.user.registred;
        this.time = Math.round(delta / 86400000);
        return this.time;
    };
    UserProfileComponent.prototype.getJokes = function (id) {
        var _this = this;
        this.loading = true;
        this.jokeService.getJokesByUserId(id).then(function (jokes) { _this.jokes = jokes; _this.loading = false; }, function () { return _this.loading = false; });
    };
    UserProfileComponent.prototype.onSelect = function (joke) {
        this.selectedJoke = joke.id;
    };
    return UserProfileComponent;
}());
UserProfileComponent = __decorate([
    core_1.Component({
        selector: 'user-profile',
        templateUrl: "./user-profile.component.html"
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        router_1.ActivatedRoute,
        common_1.Location,
        joke_service_1.JokeService])
], UserProfileComponent);
exports.UserProfileComponent = UserProfileComponent;
//# sourceMappingURL=user-profile.component.js.map