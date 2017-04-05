import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from './user';

@Injectable()
export class UserService {

	private usersUrl = 'api/users';
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) {}

	getUsers(): Promise<User[]> {  //Stub
		return this.http.get(this.usersUrl)
			.toPromise()
			.then(response => response.json().data as User[])
			.catch(this.handleError);
	}

	getUser(name: string): Promise<User> {
		const url = `${this.usersUrl}?nickname=${name}`;
	  	return this.http.get(url)
			.toPromise()
			.then(response => response.json().data as User)
			.catch(this.handleError);
	}

	incrementJokes(user: User): Promise<User> {
		const url = `${this.usersUrl}/${user.id}`;
		let userJokes = user.jokes + 1;
	  	return this.http.put(url, JSON.stringify({
	  			id: user.id,
				registred: user.registred,
				nickname: user.nickname,
				email: user.email,
				firstname: user.firstname,
				lastname: user.lastname,
				picture: user.picture,
				jokes: userJokes,
				admin: user.admin,
				password: user.password
			}) , {headers: this.headers})
			.toPromise()
			.then(() => user)
			.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}

}