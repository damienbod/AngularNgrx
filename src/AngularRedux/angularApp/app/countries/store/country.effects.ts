import { catchError, map, switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';

import * as countryAction from './country.action';
import { Country } from './../../models/country';
import { CountryService } from '../../core/services/country.service';

@Injectable()
export class CountryEffects {

    @Effect() getAllPerRegion$ = this.actions$.ofType<countryAction.SelectRegionAction>(countryAction.SELECTREGION).pipe(
        switchMap((action: countryAction.SelectRegionAction) => {
            return this.countryService.getAllPerRegion((action).region.name).pipe(
                map((data: Country[]) => {
                    const region = { name: (action as countryAction.SelectRegionAction).region.name, expanded: true, countries: data};
                    return new countryAction.SelectRegionCompleteAction(region);
                }),
                catchError((error: any) => of(error)
                ))
        }));

    constructor(
        private countryService: CountryService,
        private actions$: Actions
    ) { }
}
