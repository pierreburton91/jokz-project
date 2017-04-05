import {  Pipe, PipeTransform, Injectable } from '@angular/core';
import { Joke } from './joke';

// Tell Angular2 we're creating a Pipe with TypeScript decorators
@Pipe({
  name: 'BasicFilter',
  pure: true
})

@Injectable()
export class BasicFilter implements PipeTransform {
  // Transform is the new "return function(value, args)" in Angular 1.x
  transform(value: any[], args: string): any {

       if(!args){
            return value;
       }
       else {  	
            return value.filter((joke: Joke) => joke.title.indexOf(args.toLowerCase()) !== -1 || joke.content.indexOf(args.toLowerCase()) !== -1);
       }
    }
}