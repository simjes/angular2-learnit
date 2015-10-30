/// <reference path="../../typings/angular2/angular2.d.ts" />
/// <reference path="../../typings/angular2/http.d.ts" />
import {Component, View, NgFor} from 'angular2/angular2';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Component({
    selector: 'portfolio',
    providers: [HTTP_PROVIDERS]
})
@View({
    templateUrl: './template/portfolio.html',
    directives: [NgFor]
})

export class Portfolio {
    projects: Array<Object>;

    constructor(http: Http) {
        this.projects = [];
        http.get('projects.json')
            .map(res => res.json())
            .subscribe(projects => this.projects = projects);
    }

    tst() {
        console.log(this.projects["projects"]["0"]);
    }
}

//import directive ng-for. for each project