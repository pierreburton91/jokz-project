"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// Tell Angular2 we're creating a Pipe with TypeScript decorators
var UserFilter = (function () {
    function UserFilter() {
    }
    // Transform is the new "return function(value, args)" in Angular 1.x
    UserFilter.prototype.transform = function (value, args) {
        return value.filter(function (joke) { return joke.author == args; });
    };
    return UserFilter;
}());
UserFilter = __decorate([
    core_1.Pipe({
        name: 'UserFilter',
        pure: true
    }),
    core_1.Injectable()
], UserFilter);
exports.UserFilter = UserFilter;
//# sourceMappingURL=user-filter.pipe.js.map