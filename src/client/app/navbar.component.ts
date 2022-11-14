import { Component, Input } from '@angular/core';
import { Route } from '@angular/router';

@Component({
    selector: 'navbar',
    template: `
        <a *ngFor="let route of routes" [routerLink]="route.path">{{route.title}}</a>
    `,
    styles: [ 'a { margin-right: 20px; }' ]
})
export class NavbarComponent {
    @Input() routes: Route[] = [];
}