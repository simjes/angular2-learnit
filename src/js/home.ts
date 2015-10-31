/// <reference path="../../node_modules/angular2/angular2.d.ts" />
import {Component, View} from 'angular2/angular2';

@Component({
    selector: 'home'
})
@View({
    template: `
	<div class="home">
	<br/>
	<br/>
	<br/>
	<br/>
		<p>Simon Jespersen</p>
		<p><button class="btn btn-raised btn-material-blue-A200">View Portfolio</button></p>
		<p><button class="btn btn-raised btn-material-blue-A200">View Resume</button></p>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	</div>
	`
})
export class Home {
    constructor() { }
}