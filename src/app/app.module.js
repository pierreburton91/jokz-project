"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
// Imports for loading & configuring the in-memory web api
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var in_memory_data_service_1 = require("./in-memory-data.service");
var app_component_1 = require("./app.component");
var jokes_component_1 = require("./jokes.component");
var user_component_1 = require("./user.component");
var add_joke_component_1 = require("./add-joke.component");
var user_profile_component_1 = require("./user-profile.component");
var loader_component_1 = require("./loader.component");
var not_found_component_1 = require("./not-found.component");
var log_in_component_1 = require("./log-in.component");
var register_component_1 = require("./register.component");
var joke_service_1 = require("./joke.service");
var user_service_1 = require("./user.service");
var authentication_service_1 = require("./authentication.service");
var basic_filter_pipe_1 = require("./basic-filter.pipe");
// import { UserFilter } from './user-filter.pipe';
var app_routing_module_1 = require("./app-routing.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, app_routing_module_1.AppRoutingModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, http_1.HttpModule, angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService)],
        declarations: [app_component_1.AppComponent, jokes_component_1.JokesComponent, user_component_1.UsersComponent, basic_filter_pipe_1.BasicFilter, loader_component_1.LoaderComponent, add_joke_component_1.AddJokeComponent, user_profile_component_1.UserProfileComponent, not_found_component_1.NotFoundComponent, log_in_component_1.LogInComponent, register_component_1.RegisterComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [joke_service_1.JokeService, user_service_1.UserService, authentication_service_1.AuthenticationService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map