/// <reference path="../../typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
      selector: 'my-app'
    })
@View({
      templateUrl: 'template/home.html'
    })
export class App {
    constructor() { }
}

bootstrap(App);