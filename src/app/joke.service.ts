import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Joke } from './joke';

@Injectable()
export class JokeService {
	private jokesUrl = 'api/jokes';
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) {}

	getJokes(): Promise<Joke[]> {  //Stub
		return this.http.get(this.jokesUrl)
				.toPromise()
				.then(response => response.json().data as Joke[])
				.catch(this.handleError);
	}

	getJokesByUserId(id: number): Promise<Joke[]> {
		const userJokesUrl = `api/jokes?authorId=${id}`;
		return this.http.get(userJokesUrl)
				.toPromise()
				.then(response => response.json().data as Joke[])
				.catch(this.handleError);
	}

	create(title: string, content: string, author: string, id: number): Promise<Joke> {
	  return this.http
	    .post(this.jokesUrl, JSON.stringify({title: title, content: content, author: author, authorId: id}), {headers: this.headers})
	    .toPromise()
	    .then(res => res.json().data)
	    .catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}
}