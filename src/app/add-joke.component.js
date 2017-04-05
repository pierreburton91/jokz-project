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
var user_service_1 = require("./user.service");
var common_1 = require("@angular/common");
var AddJokeComponent = (function () {
    function AddJokeComponent(jokeService, userService, location, route, router) {
        this.jokeService = jokeService;
        this.userService = userService;
        this.location = location;
        this.route = route;
        this.router = router;
        this.isEmptyTitle = false;
        this.isEmptyContent = false;
    }
    AddJokeComponent.prototype.ngOnInit = function () {
        this.route.params.subscribe(function () {
            window.scrollTo(0, 0);
        });
    };
    AddJokeComponent.prototype.checkIfEmpty = function (event) {
        if (event.target.value != null) {
            this.isEmptyTitle = false;
        }
    };
    AddJokeComponent.prototype.checkIfEmpty2 = function (event) {
        if (event.target.value != null) {
            this.isEmptyContent = false;
        }
    };
    AddJokeComponent.prototype.add = function (title, content) {
        var _this = this;
        if (!title || !content) {
            if (!title) {
                this.isEmptyTitle = true;
            }
            if (!content) {
                this.isEmptyContent = true;
            }
            return;
        }
        title = title.trim();
        content = content.replace(/\r?\n/g, '<br>');
        var author = sessionStorage.getItem("nickname");
        var id = parseInt(sessionStorage.getItem("userId"));
        this.jokeService.create(title, content, author, id);
        this.userService.getUser(author).then(function (user) { return _this.userService.incrementJokes(user[0]); });
        this.router.navigate(['/jokes']);
    };
    AddJokeComponent.prototype.goBack = function (title, content) {
        if (title || content) {
            var r = confirm("Are you sure ?\nAll your changes will be lost.");
            if (r === true) {
                this.location.back();
            }
            else {
                return;
            }
        }
        else {
            this.location.back();
        }
    };
    return AddJokeComponent;
}());
AddJokeComponent = __decorate([
    core_1.Component({
        selector: 'add-joke',
        templateUrl: "./add-joke.component.html",
    }),
    __metadata("design:paramtypes", [joke_service_1.JokeService,
        user_service_1.UserService,
        common_1.Location,
        router_1.ActivatedRoute,
        router_1.Router])
], AddJokeComponent);
exports.AddJokeComponent = AddJokeComponent;
//# sourceMappingURL=add-joke.component.js.map