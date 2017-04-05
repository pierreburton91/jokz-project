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
var UsersComponent = (function () {
    function UsersComponent(UserService, route) {
        this.UserService = UserService;
        this.route = route;
        this.title = 'Users';
        this.loading = false;
    }
    UsersComponent.prototype.getUsers = function () {
        var _this = this;
        this.loading = true;
        this.UserService.getUsers().then(function (users) { _this.users = users; _this.loading = false; }, function () { return _this.loading = false; });
    };
    UsersComponent.prototype.ngOnInit = function () {
        this.route.params.subscribe(function () {
            window.scrollTo(0, 0);
        });
        this.getUsers();
    };
    UsersComponent.prototype.onSelect = function (user) {
        this.selectedUserById = user.id;
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    core_1.Component({
        selector: 'my-users',
        templateUrl: "./user.component.html"
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        router_1.ActivatedRoute])
], UsersComponent);
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=user.component.js.map