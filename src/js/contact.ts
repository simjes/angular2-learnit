/// <reference path="../../typings/angular2/angular2.d.ts" />
import {Component, View} from 'angular2/angular2';

@Component({
    selector: 'contact'
})
@View({
    template: `
    <div id="page-cont">
		<div class="container">
			<h1>contact me</h1>
		</div>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	</div>
	`
})
export class Contact {
    constructor() { }
}