import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { User } from './user';
import { UserService } from './user.service';
import { AuthenticationService } from './authentication.service';
import { Location } from '@angular/common';

@Component({
	selector: "register",
	templateUrl: "./register.component.html"
})

export class RegisterComponent {

}