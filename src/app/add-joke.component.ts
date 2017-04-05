import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Joke } from './joke';
import { JokeService } from './joke.service';
import { UserService } from './user.service';
import { Location } from '@angular/common';
import { JokesComponent } from './jokes.component';

@Component({
  selector: 'add-joke',
  templateUrl: "./add-joke.component.html",
})

export class AddJokeComponent { 

	isEmptyTitle: boolean = false;
	isEmptyContent: boolean = false;

	constructor(private jokeService: JokeService,
				private userService: UserService,
				private location: Location,
				private route: ActivatedRoute,
				private router: Router) {}

	ngOnInit(): void {
  		this.route.params.subscribe(() => {
	      window.scrollTo(0, 0);
	    });
	}

	checkIfEmpty(event: any): void {
		if (event.target.value != null) {
			this.isEmptyTitle = false;
		}
	}

	checkIfEmpty2(event: any): void {
		if (event.target.value != null) {
			this.isEmptyContent = false;
		}
	}

	add(title: string, content: string): void {

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
	  	const author: string = sessionStorage.getItem("nickname");
	  	const id: number = parseInt(sessionStorage.getItem("userId"));

	  	this.jokeService.create(title, content, author, id);
	  	this.userService.getUser(author).then(user => this.userService.incrementJokes(user[0]));

		this.router.navigate(['/jokes']);
	}

	goBack(title: string, content: string): void {
		if (title || content) {
			const r: boolean = confirm("Are you sure ?\nAll your changes will be lost.");
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
		
	}
}
