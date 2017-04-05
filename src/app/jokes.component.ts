import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Joke } from './joke';
import { JokeService } from './joke.service';

import { BasicFilter } from './basic-filter.pipe';

@Component({
  selector: 'my-jokes',
  templateUrl: "./jokes.component.html"
})

export class JokesComponent implements OnInit { 
	jokes: Joke[];
	selectedJoke: number;
	search: string;
	loading: boolean = false;

	constructor(private jokeService: JokeService, 
				private route: ActivatedRoute) { }

	ngOnInit(): void {
  		this.route.params.subscribe(() => {
	      window.scrollTo(0, 0);
	    });
	    //Get all jokes
	    this.getJokes();
	}
	getJokes(): void {
		this.loading = true;
    	this.jokeService.getJokes().then(jokes => {this.jokes = jokes; this.loading = false;}, () => this.loading = false);
  	}
	onSelect(joke: Joke): void {
		this.selectedJoke = joke.id;
	}
}
