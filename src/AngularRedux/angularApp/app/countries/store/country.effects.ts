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

    @Effect() getAllPerRegion$: Observable<Action> = this.actions$.ofType(countryAction.SELECTREGION)
        .switchMap((action: countryAction.SelectRegionAction) =>
            this.countryService.getAllPerRegion(action.region.name)
                .map((data: Country[]) => {
                    const region = { name: action.region.name, expanded: true, countries: data};
                    return new countryAction.SelectRegionCompleteAction(region);
                })
                .catch(() => {
                    return of({ type: 'getAllPerRegion$' })
                })
        );
    constructor(
        private countryService: CountryService,
        private actions$: Actions
    ) { }
}
