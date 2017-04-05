import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { User } from './user';
import { UserService } from './user.service';
import { AuthenticationService } from './authentication.service';
import { Location } from '@angular/common';

@Component({
	selector: "log-in",
	templateUrl: "./log-in.component.html"
})

export class LogInComponent {

	user: User;
	loading: boolean = false;
	loginError: boolean = false;
	isEmptyNickname: boolean = false;
	isEmptyPassword: boolean = false;

	constructor(private authService: AuthenticationService,
				private userService: UserService,
				private location: Location,
				private route: ActivatedRoute,
				private router: Router) {
	}

	ngOnInit() {
		this.loading = true;

		this.authService.logout();

		this.route.params.subscribe(() => {
	      window.scrollTo(0, 0);
	    });

		this.loading = false;
	}

	attemptLogin(nickname: string, password: string): void {
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
				.then(user => {this.user = user[0]; 
					if (this.authService.login(password, this.user)) {
						this.router.navigate(['jokes']);
					}
					else {
						// Return "username/password" error on form
						this.loginError = true;
					}
				})
		}
	}

	checkIfEmpty(event: any): void {
		if (event.target.value != null) {
			this.isEmptyNickname = false;
		}
	}

	checkIfEmpty2(event: any): void {
		if (event.target.value != null) {
			this.isEmptyPassword = false;
		}
	}

	goBack(): void {
		this.isEmptyNickname = false;
		this.isEmptyPassword = false;
		this.location.back();
	}
}