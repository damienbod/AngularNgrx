import { Component } from '@angular/core';

@Component({
    selector: 'app-country-component',
    templateUrl: './country.component.html'
})

export class CountryComponent {

    public message: string;

    constructor() {
        this.message = 'Hello from CountryComponent constructor';
    }
}
