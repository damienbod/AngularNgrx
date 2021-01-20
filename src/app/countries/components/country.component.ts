import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CountryState } from '../store/country.state';
import * as CountryActions from '../store/country.action';
import { Region } from './../../models/region';

@Component({
    selector: 'app-country-component',
    templateUrl: './country.component.html',
    styleUrls: ['./country.component.scss']
})

export class CountryComponent {

    async: any;

    regionsState$: Observable<CountryState>;

    constructor(private store: Store<any>) {
      this.regionsState$ = this.store.select<CountryState>((state: any) => state.world);
    }

    getCountries(region: Region): void {
      this.store.dispatch(new CountryActions.SelectRegionAction(region));
    }

    collapse(region: Region): void {
      this.store.dispatch(new CountryActions.CollapseRegionAction(region));
    }
}
