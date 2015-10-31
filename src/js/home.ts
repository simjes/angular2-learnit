/// <reference path="../../typings/angular2/angular2.d.ts" />
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
		<p><button class="btn btn-primary btn-raised">View Portfolio</button></p>
		<p><button class="btn btn-primary btn-raised" href="#">View Resume</button></p>
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