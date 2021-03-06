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
/// <reference path="../../typings/angular2/angular2.d.ts" />
/// <reference path="../../typings/angular2/router.d.ts" />
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
            template: "\n    <nav class=\"navbar navbar-fixed-top navbar-material-teal shadow-z-2 center\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-responsive-collapse\">\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n        </button>\n        <div class=\"navbar-collapse collapse navbar-responsive-collapse navbar-inner\">\n            <ul class=\"nav navbar-nav\">\n                <li><a [router-link]=\"['/Home']\">HOME</a></li>\n                <li><a [router-link]=\"['/Portfolio']\">PORTFOLIO</a></li>\n                <li><a [router-link]=\"['/Contact']\">CONTACT</a></li>\n            </ul>\n        </div>\n    </nav>\n    <router-outlet></router-outlet>\n    <footer class=\"navbar navbar-fixed-bottom\">\n        <p>&copy; Simon Jespersen 2015</p>\n    </footer>",
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