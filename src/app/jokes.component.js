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
var joke_service_1 = require("./joke.service");
var JokesComponent = (function () {
    function JokesComponent(jokeService, route) {
        this.jokeService = jokeService;
        this.route = route;
        this.loading = false;
    }
    JokesComponent.prototype.ngOnInit = function () {
        this.route.params.subscribe(function () {
            window.scrollTo(0, 0);
        });
        //Get all jokes
        this.getJokes();
    };
    JokesComponent.prototype.getJokes = function () {
        var _this = this;
        this.loading = true;
        this.jokeService.getJokes().then(function (jokes) { _this.jokes = jokes; _this.loading = false; }, function () { return _this.loading = false; });
    };
    JokesComponent.prototype.onSelect = function (joke) {
        this.selectedJoke = joke.id;
    };
    return JokesComponent;
}());
JokesComponent = __decorate([
    core_1.Component({
        selector: 'my-jokes',
        templateUrl: "./jokes.component.html"
    }),
    __metadata("design:paramtypes", [joke_service_1.JokeService,
        router_1.ActivatedRoute])
], JokesComponent);
exports.JokesComponent = JokesComponent;
//# sourceMappingURL=jokes.component.js.map