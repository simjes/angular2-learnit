/// <reference path="../../node_modules/angular2/angular2.d.ts" />
/// <reference path="../../node_modules/angular2/http.d.ts" />
import {Component, View, NgFor, NgIf, ElementRef} from 'angular2/angular2';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

declare var jQuery: any;

@Component({
    selector: 'portfolio',
    providers: [HTTP_PROVIDERS]
})
@View({
    templateUrl: './template/portfolio.html',
    directives: [NgFor, NgIf]
})

export class Portfolio {
    projects: Array<Object>;
    elementRef: ElementRef;

    constructor(http: Http, elementRef: ElementRef) {
        this.elementRef = elementRef;
        this.projects = [];
        http.get('projects.json')
            .map(res => res.json())
            .subscribe(projects => this.projects = projects);
    }
    
    tst() {
        jQuery(this.elementRef.nativeElement).find('.slider').slider();
        console.log('fc');
    }
}
