import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import 'rxjs/add/operator/map'

 
@Injectable()
export class AuthenticationService {

     private loggedSource = new Subject<boolean>();
     loggedSource$ = this.loggedSource.asObservable();

    constructor(private http: Http) { }

     

    login(password: string, user: any): boolean {
       
        if (user && user.password == password) {
            sessionStorage.setItem("userId", user.id),
            sessionStorage.setItem("nickname", user.nickname),
            sessionStorage.setItem("picture", user.picture),
            sessionStorage.setItem("isAdmin", user.admin);
            this.loggedSource.next(true);
            return true
        }
        else {
            this.loggedSource.next(false);
            return false;
        }
        // return this.http.post('/api/authenticate', JSON.stringify({ nickname: username, password: password }))
        //     .map((response: Response) => {
        //         // login successful if there's a jwt token in the response
        //         let user = response.json();
        //         if (user) {
        //             // store user details and jwt token in local storage to keep user logged in between page refreshes
        //             localStorage.setItem('currentUser', JSON.stringify(user));
        //         }
        //     });
    }
 
    logout(): void {
        // remove user from local storage to log user out
        sessionStorage.removeItem('userId'),
        sessionStorage.removeItem('nickname'),
        sessionStorage.removeItem('picture'),
        sessionStorage.removeItem('isAdmin');
        this.loggedSource.next(false)
    }
}