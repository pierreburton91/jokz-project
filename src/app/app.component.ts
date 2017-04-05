import { Component, Renderer, OnInit } from '@angular/core';

import { AuthenticationService } from './authentication.service';

@Component({
	selector: "my-app",
	templateUrl: "./app.component.html"
})

export class AppComponent implements OnInit {
	AppName = "Jok'z Project";
	isLogged: boolean = false;
	picture: string;
	username: string;
	isAdmin: boolean;

	constructor(private render: Renderer,
				private auth: AuthenticationService) {
		//Listen to scroll to apply css to header
		this.render.listenGlobal('window', 'scroll', (evt: any) => { this.isScrolled() });

		//Listen to login to adapt header menu
		this.auth.loggedSource$.subscribe(bool => {this.isLogged = bool, this.getStorage(bool)});
	}

	ngOnInit() {
		//Check storage on init to avoid login
		this.checkStorage();
	}
	
	isScrolled(): boolean {
		if(window.scrollY != 0){
			return true;
		}
		else {
			return false;
		}
	}

	checkStorage(): void {
		if (sessionStorage.getItem("nickname")) {
			this.username = sessionStorage.getItem("nickname");
			this.picture = sessionStorage.getItem("picture");
			const admin = sessionStorage.getItem("isAdmin");
			if (admin == "true") {
				this.isAdmin = true;
			}
			else {
				this.isAdmin = false;
			}
			this.isLogged = true;
		}
	}

	getStorage(bool: boolean):void {
		if (bool) {
			this.username = sessionStorage.getItem("nickname");
			this.picture = sessionStorage.getItem("picture");
			const admin = sessionStorage.getItem("isAdmin");
			if (admin == "true") {
				this.isAdmin = true;
			}
			else {
				this.isAdmin = false;
			}
		}
	}

	logOut(): void {
		this.auth.logout();
	}
}