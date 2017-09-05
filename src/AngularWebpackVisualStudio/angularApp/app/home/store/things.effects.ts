import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Rx';

import * as thingsAction from './thing.action';
import { Thing } from './../../models/thing';
import { ThingService } from '../../core/services/thing-data.service';

@Injectable()
export class ThingsEffects {

    @Effect() addThing$: Observable<Action> = this.actions$.ofType(thingsAction.ADD)
        .switchMap((action: thingsAction.AddAction) =>
            this.thingService.add(action.thing)
                .map((data: Thing) => {
                    return new thingsAction.AddCompleteAction(data);
                })
                .catch((error: any) => {
                    return of({ type: 'LOGIN_FAILED' })
                })
        );

    @Effect() getAll$: Observable<Action> = this.actions$.ofType(thingsAction.SELECTALL)
        .switchMap(() =>
            this.thingService.getAll()
                .map((data: Thing[]) => {
                    return new thingsAction.SelectAllCompleteAction(data);
                })
                .catch((error: any) => {
                    return of({ type: 'LOGIN_FAILED' })
                })
        );


    constructor(
        private thingService: ThingService,
        private actions$: Actions
    ) { }
}
