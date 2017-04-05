import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { User } from './user';
import { UserService } from './user.service';

import { UserFilter } from './user-filter.pipe';


@Component({
    selector: 'my-users',
  	templateUrl: "./user.component.html"
})

export class UsersComponent implements OnInit { 
	title = 'Users';
	users: User[];
	user: User;
	selectedUserById: number;
	loading: boolean = false;

	constructor(private UserService: UserService,
				private route: ActivatedRoute
  				) { }

	getUsers(): void {
		this.loading = true;
    	this.UserService.getUsers().then(users => {this.users = users; this.loading = false;}, () => this.loading = false);
  	}
  	ngOnInit(): void {
  		this.route.params.subscribe(() => {
	      window.scrollTo(0, 0);
	    });
	    this.getUsers();
	}
	onSelect(user: User): void {
		this.selectedUserById = user.id;
	}
}
