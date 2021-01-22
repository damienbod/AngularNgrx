import { select } from '@ngrx/store';

import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import {
  catchError,
  groupBy,
  map,
  mergeMap,
  reduce,
  switchMap,
} from 'rxjs/operators';

import * as countryAction from './country.action';
import { Country } from './../../models/country';
import { CountryService } from '../../core/services/country.service';

@Injectable()
export class CountryEffects {
  constructor(
    private countryService: CountryService,
    private actions$: Actions
  ) {}

  getRegion$ = createEffect(() =>
    this.actions$.pipe(
      ofType(countryAction.getRegionAction),
      switchMap((action) =>
        this.countryService.getAllPerRegion(action.payload.name).pipe(
          map((data: Country[]) => {
            const region = {
              name: action.payload.name,
              expanded: true,
              countries: data,
            };
            return countryAction.getRegionFinishedAction({ payload: region });
          }),
          catchError((error) => of(error))
        )
      )
    )
  );

  getCountries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(countryAction.getAllCountriesAction),
      switchMap((action) =>
        this.countryService.getAll().pipe(
          map((payload: Country[]) =>
            countryAction.getAllCountriesFinishedAction({ payload })
          ),
          catchError((error) => of(error))
        )
      )
    )
  );
}
