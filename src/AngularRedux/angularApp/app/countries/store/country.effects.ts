import { catchError, map, switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of, Observable } from 'rxjs';

import * as countryAction from './country.action';
import { Country } from './../../models/country';
import { CountryService } from '../../core/services/country.service';

@Injectable()
export class CountryEffects {

    @Effect()
    getAllPerRegion$: Observable<Action> = this.actions$.pipe(
        ofType<countryAction.SelectRegionAction>(countryAction.SELECTREGION),
        switchMap((action: countryAction.SelectRegionAction) => {
            return this.countryService.getAllPerRegion((action).region.name).pipe(
                map((data: Country[]) => {
                    const region = { name: (action as countryAction.SelectRegionAction).region.name, expanded: true, countries: data };
                    return new countryAction.SelectRegionCompleteAction(region);
                }),
                catchError((error: any) => of(error)
                ));
        })
    );

    constructor(
        private countryService: CountryService,
        private actions$: Actions
    ) { }
}
