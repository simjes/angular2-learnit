import {Component, View} from 'angular2/angular2';

@Component({
    selector: 'portfolio'
})
@View({
    template: `
    <div>
	<br/>
	<br/>
	<br/>
	<br/>
		<p>Simon Jespersen</p>
		<p><button class="btn btn-primary btn-raised" href="#">View Portfolio</button></p>
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
export class Portfolio {
    constructor() { }
}