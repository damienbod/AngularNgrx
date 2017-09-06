import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { CountryState } from '../store/country.state';
import * as CountryActions from '../store/country.action';
import { Country } from './../../models/country';
import { Region } from './../../models/region';

@Component({
    selector: 'app-country-component',
    templateUrl: './country.component.html'
})

export class CountryComponent implements OnInit {

    public async: any;

    regionsState$: Observable<CountryState>;

    constructor(private store: Store<any>) {
        this.regionsState$ = this.store.select<CountryState>(state => state.world.regions);
    }

    ngOnInit() {
        this.store.dispatch(new CountryActions.SelectAllAction());
    }

    public getCountries(region: Region) {
        this.store.dispatch(new CountryActions.SelectRegionAction(region));
    }

    public collapse(region: Region) {
        // this.store.dispatch(new CountryActions.SelectRegionAction(region));
    }
}
