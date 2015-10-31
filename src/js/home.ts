/// <reference path="../../node_modules/angular2/angular2.d.ts" />
import {Component, View} from 'angular2/angular2';

@Component({
    selector: 'home'
})
@View({
    template: `
	<div class="home">
		<div>
			<h1>Simon Jespersen</h1>
			<p><a class="waves-effect waves-light btn-large blue accent-2 z-depth-1">View Portfolio</a></p>
			<p><a class="waves-effect waves-light btn-large blue accent-2 z-depth-1">View Resume</a></p>
		</div>
	</div>
	`
})
export class Home {
    constructor() { }
}