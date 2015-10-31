/// <reference path="../../node_modules/angular2/angular2.d.ts" />
/// <reference path="../../node_modules/angular2/router.d.ts" />
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
    <div class="navbar-fixed">
        <nav class="teal z-depth-1">
            <div class="nav-wrapper">
                <a href="#" class="brand-logo center">SIMJES</a>
                <div class="router-buttons">
                    <div class="img-circle shadow-z-2"><a [router-link]="['/Home']"><img src="img/home.svg" height="50" width="50"></a></div>
                    <div class="img-circle shadow-z-2"><a [router-link]="['/Portfolio']"><img src="img/portfolio.svg" height="50" width="50"></a></div>
                    <div class="img-circle shadow-z-2"><a [router-link]="['/Contact']"><img src="img/contact.svg" height="50" width="50"></a></div>
                </div>
            </div>
        </nav>
    </div>
    <router-outlet></router-outlet>
    <footer class="navbar navbar-fixed-bottom">
        <p>&copy; Simon Jespersen 2015</p>
    </footer>
    `,
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