import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Rx';

import * as countryAction from './country.action';
import { Country } from './../../models/country';
import { CountryService } from '../../core/services/country.service';

@Injectable()
export class CountryEffects {

    @Effect() getAll$: Observable<Action> = this.actions$.ofType(countryAction.SELECTALL)
        .switchMap(() =>
            this.countryService.getAll()
                .map((data: Country[]) => {
                    return new countryAction.SelectAllCompleteAction(data);
                })
                .catch((error: any) => {
                    return of({ type: 'getAll_FAILED' })
                })
        );

    @Effect() getAllPerRegion$: Observable<Action> = this.actions$.ofType(countryAction.SELECTREGION)
        .switchMap((action: countryAction.SelectRegionAction) =>
            this.countryService.getAllPerRegion(action.region.name)
                .map((data: Country[]) => {
                    const region = { name: action.region.name, expanded: true, countries: data};
                    return new countryAction.SelectRegionCompleteAction(region);
                })
                .catch((error: any) => {
                    return of({ type: 'getAllPerRegion$' })
                })
        );
    constructor(
        private countryService: CountryService,
        private actions$: Actions
    ) { }
}
