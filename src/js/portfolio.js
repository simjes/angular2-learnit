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
/// <reference path="../../node_modules/angular2/http.d.ts" />
var angular2_1 = require('angular2/angular2');
var http_1 = require('angular2/http');
var Portfolio = (function () {
    function Portfolio(http, elementRef) {
        var _this = this;
        this.elementRef = elementRef;
        this.projects = [];
        http.get('projects.json')
            .map(function (res) { return res.json(); })
            .subscribe(function (projects) { return _this.projects = projects; });
    }
    Portfolio.prototype.tst = function () {
        jQuery(this.elementRef.nativeElement).find('.slider').slider();
        console.log('fc');
    };
    Portfolio = __decorate([
        angular2_1.Component({
            selector: 'portfolio',
            providers: [http_1.HTTP_PROVIDERS]
        }),
        angular2_1.View({
            templateUrl: './template/portfolio.html',
            directives: [angular2_1.NgFor, angular2_1.NgIf]
        }), 
        __metadata('design:paramtypes', [http_1.Http, angular2_1.ElementRef])
    ], Portfolio);
    return Portfolio;
})();
exports.Portfolio = Portfolio;
//# sourceMappingURL=portfolio.js.map