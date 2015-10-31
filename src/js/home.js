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
var angular2_1 = require('angular2/angular2');
var Home = (function () {
    function Home() {
    }
    Home = __decorate([
        angular2_1.Component({
            selector: 'home'
        }),
        angular2_1.View({
            template: "\n\t<div class=\"home\">\n\t\t<div>\n\t\t\t<h1>Simon Jespersen</h1>\n\t\t\t<p><a class=\"waves-effect waves-light btn-large blue accent-2 z-depth-1\">View Portfolio</a></p>\n\t\t\t<p><a class=\"waves-effect waves-light btn-large blue accent-2 z-depth-1\">View Resume</a></p>\n\t\t</div>\n\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], Home);
    return Home;
})();
exports.Home = Home;
//# sourceMappingURL=home.js.map