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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var JokeService = (function () {
    function JokeService(http) {
        this.http = http;
        this.jokesUrl = 'api/jokes';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    JokeService.prototype.getJokes = function () {
        return this.http.get(this.jokesUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    JokeService.prototype.getJokesByUserId = function (id) {
        var userJokesUrl = "api/jokes?authorId=" + id;
        return this.http.get(userJokesUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    JokeService.prototype.create = function (title, content, author, id) {
        return this.http
            .post(this.jokesUrl, JSON.stringify({ title: title, content: content, author: author, authorId: id }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    JokeService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return JokeService;
}());
JokeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], JokeService);
exports.JokeService = JokeService;
//# sourceMappingURL=joke.service.js.map