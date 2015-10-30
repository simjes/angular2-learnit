/// <reference path="../../typings/angular2/angular2.d.ts" />
/// <reference path="../../typings/angular2/http.d.ts" />
import {Component, View, NgFor} from 'angular2/angular2';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Component({
    selector: 'portfolio'
})
@View({
    templateUrl: './template/portfolio.html',
    directives: [NgFor]
})
export class Portfolio {
    constructor() {

    }
}

//import directive ng-for. for each project