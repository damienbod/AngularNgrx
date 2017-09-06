import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { CountryState } from '../store/country.state';
import * as CountryActions from '../store/country.action';
import { Country } from './../../models/country';

@Component({
    selector: 'app-country-component',
    templateUrl: './country.component.html'
})

export class CountryComponent implements OnInit {

    public async: any;

    countryState$: Observable<CountryState>;

    constructor(private store: Store<any>) {
        this.countryState$ = this.store.select<CountryState>(state => state.country.countries);
    }

    ngOnInit() {
        this.store.dispatch(new CountryActions.SelectAllAction());
    }

    public getCountries(region: string) {
        // this.store.dispatch(new HomeActions.DeleteAction(thing));
    }
}
