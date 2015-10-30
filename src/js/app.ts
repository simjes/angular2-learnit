/// <reference path="../../typings/angular2/angular2.d.ts" />
/// <reference path="../../typings/angular2/router.d.ts" />
import {Component, View, bootstrap, bind} from 'angular2/angular2';
import {Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {Location, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {Home} from './home';
import {Portfolio} from './portfolio'
import {Contact} from './contact'


@Component({
    selector: 'my-app'
})
@View({
    template: `
    <nav class="navbar navbar-fixed-top navbar-material-teal shadow-z-1 center">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
        <div class="navbar-collapse collapse navbar-responsive-collapse navbar-inner">
            <ul class="nav navbar-nav">
                <li><a [router-link]="['/Home']">HOME</a></li>
                <li><a [router-link]="['/Portfolio']">PORTFOLIO</a></li>
                <li><a [router-link]="['/Contact']">CONTACT</a></li>
            </ul>
        </div>
    </nav>
    <router-outlet></router-outlet>
    <footer class="navbar navbar-fixed-bottom">
        <p>&copy; Simon Jespersen 2015</p>
    </footer>`,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/', redirectTo: '/Home' },
    { path: '/Home', component: Home, as: 'Home' },
    { path: '/Portfolio', component: Portfolio, as: 'Portfolio' },
    { path: '/Contact', component: Contact, as: 'Contact' }
])

export class App {
    constructor() { }
}

bootstrap(App, [ROUTER_PROVIDERS, bind(LocationStrategy).toClass(HashLocationStrategy)]);