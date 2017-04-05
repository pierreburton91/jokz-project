import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { User } from './user';
import { UserService } from './user.service';
import { Joke } from './joke';
import { JokeService } from './joke.service';

import { UserFilter } from './user-filter.pipe';

import 'rxjs/add/operator/switchMap';


@Component({
    selector: 'user-profile',
  	templateUrl: "./user-profile.component.html"
})

export class UserProfileComponent implements OnInit { 
	user: User;
	loading: boolean = false;
	private d = new Date();
	private n = this.d.getTime();
	private time: number;
	jokes: Joke[];
	selectedJoke: number;

	constructor(private UserService: UserService,
				private route: ActivatedRoute,
  				private location: Location,
  				private jokeService: JokeService
  				) { }

  	ngOnInit(): void {
  		this.loading = true;
  		this.route.params.subscribe(() => {
	      window.scrollTo(0, 0);
	    });

		this.route.params
			.switchMap((params: Params) => this.UserService.getUser(params['name']))
			.subscribe(user => {this.user = user[0], this.loading = false, this.getRegistredTime(), this.getJokes(this.user.id)}, () => this.loading = false);

		
	}

	setPicture(): string {
		if (this.user.picture != null) {
			return "url("+this.user.picture+")";
		}
		else {
			return "url(https://robohash.org/default.png?size=150x150&set=set2)";
		}
	}

	getRegistredTime(): number {
		const delta = this.n - this.user.registred;
		this.time = Math.round(delta / 86400000);

		return this.time;
	}

	getJokes(id: number): void {
		this.loading = true;
    	this.jokeService.getJokesByUserId(id).then(jokes => {this.jokes = jokes; this.loading = false}, () => this.loading = false);
  	}

  	onSelect(joke: Joke): void {
		this.selectedJoke = joke.id;
	}
}
