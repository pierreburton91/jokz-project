import { Component, Input } from '@angular/core';

@Component({
	selector: "my-loader",
	template: `<div class="loader"></div>`
})

export class LoaderComponent {
	@Input() loading: boolean = false;
}