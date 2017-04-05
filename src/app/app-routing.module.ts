import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JokesComponent }   from './jokes.component';
import { UsersComponent }      from './user.component';
import { AddJokeComponent } from './add-joke.component';
import { UserProfileComponent } from './user-profile.component';
import { NotFoundComponent } from './not-found.component';
import { LogInComponent } from './log-in.component';
import { RegisterComponent } from './register.component';

const routes: Routes = [
  { path: '', redirectTo: '/jokes', pathMatch: 'full' },
  { path: 'jokes',  component: JokesComponent },
  { path: 'users/:name', component: UserProfileComponent },
  { path: 'users',     component: UsersComponent },
  { path: 'add-joke', component: AddJokeComponent },
  { path: 'login',     component: LogInComponent },
  { path: 'register', component: RegisterComponent },

  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}