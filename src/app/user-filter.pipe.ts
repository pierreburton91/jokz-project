import {  Pipe, PipeTransform, Injectable } from '@angular/core';
import { Joke } from './joke';

// Tell Angular2 we're creating a Pipe with TypeScript decorators
@Pipe({
  name: 'UserFilter',
  pure: true
})

@Injectable()
export class UserFilter implements PipeTransform {
  // Transform is the new "return function(value, args)" in Angular 1.x
  transform(value: any[], args: string): any {
      return value.filter((joke: Joke) => joke.author == args);
  }
}