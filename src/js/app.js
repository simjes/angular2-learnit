var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="../../node_modules/angular2/angular2.d.ts" />
/// <reference path="../../node_modules/angular2/router.d.ts" />
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var router_2 = require('angular2/router');
var home_1 = require('./home');
var portfolio_1 = require('./portfolio');
var contact_1 = require('./contact');
var App = (function () {
    function App() {
    }
    App = __decorate([
        angular2_1.Component({
            selector: 'my-app'
        }),
        angular2_1.View({
            template: "\n    <div class=\"navbar-fixed\">\n        <nav class=\"teal z-depth-1\">\n            <div class=\"nav-wrapper\">\n                <a href=\"#\" class=\"brand-logo center\">SIMJES</a>\n                 <div class=\"router-buttons\">\n                    <div class=\"img-circle z-depth-2\"><a [router-link]=\"['/Home']\"><img src=\"img/home.svg\" height=\"60\" width=\"60\"></a></div>\n                    <div class=\"img-circle z-depth-2\"><a [router-link]=\"['/Portfolio']\"><img src=\"img/portfolio.svg\" height=\"60\" width=\"60\"></a></div>\n                    <div class=\"img-circle z-depth-2\"><a [router-link]=\"['/Contact']\"><img src=\"img/contact.svg\" height=\"60\" width=\"60\"></a></div>\n                </div>\n            </div>\n        </nav>\n    </div>\n    <router-outlet></router-outlet>\n    <footer class=\"page-footer teal\">\n        \u00A9 2015 Simon Jespersen\n    </footer>\n    ",
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig([
            { path: '/', redirectTo: '/Home' },
            { path: '/Home', component: home_1.Home, as: 'Home' },
            { path: '/Portfolio', component: portfolio_1.Portfolio, as: 'Portfolio' },
            { path: '/Contact', component: contact_1.Contact, as: 'Contact' }
        ]), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
exports.App = App;
angular2_1.bootstrap(App, [router_1.ROUTER_PROVIDERS, angular2_1.bind(router_2.LocationStrategy).toClass(router_2.HashLocationStrategy)]);
//# sourceMappingURL=app.js.map