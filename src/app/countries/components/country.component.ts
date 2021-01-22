import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CountryState } from '../store/country.state';
import * as CountryActions from '../store/country.action';
import { Region } from './../../models/region';
import { selectRegions } from '../store/country.selectors';
import { getAllCountriesAction } from '../store/country.action';

@Component({
  selector: 'app-country-component',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent {
  async: any;

  // { name: 'Africa', expanded:  false, countries: [] },
  // { name: 'Americas', expanded: false, countries: [] },
  // { name: 'Asia', expanded: false, countries: [] },
  // { name: 'Europe', expanded: false, countries: [] },
  // { name: 'Oceania', expanded: false, countries: [] }
  allRegions$: Observable<Region[]>;

  constructor(private store: Store<any>) {
    this.allRegions$ = this.store.pipe(select(selectRegions));

    this.store.dispatch(getAllCountriesAction());
  }

  toggleExpanded(region: Region): void {
    region.expanded = !region.expanded;
  }
}
