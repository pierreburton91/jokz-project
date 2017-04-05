import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { JokesComponent }  from './jokes.component';
import { UsersComponent }  from './user.component';
import { AddJokeComponent } from './add-joke.component';
import { UserProfileComponent } from './user-profile.component';
import { LoaderComponent } from './loader.component';
import { NotFoundComponent } from './not-found.component';
import { LogInComponent } from './log-in.component';
import { RegisterComponent } from './register.component';

import { JokeService }  from './joke.service';
import { UserService }  from './user.service';
import { AuthenticationService } from './authentication.service';

import { BasicFilter } from './basic-filter.pipe';
// import { UserFilter } from './user-filter.pipe';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService) ],
  declarations: [ AppComponent, JokesComponent, UsersComponent, BasicFilter, LoaderComponent, AddJokeComponent, UserProfileComponent, NotFoundComponent, LogInComponent, RegisterComponent ],
  bootstrap:    [ AppComponent ],
  providers:	[ JokeService, UserService, AuthenticationService ]
})
export class AppModule { }
