import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
	selector: "not-found",
	templateUrl: "./404.html"
})

export class NotFoundComponent {

	constructor(private location: Location) {}

	goBack(): void {
		this.location.back();
	}
}