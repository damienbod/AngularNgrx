import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import {
  catchError,
  map,
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
