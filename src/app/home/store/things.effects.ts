import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { of ,  Observable } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as thingsAction from './thing.action';
import { Thing } from './../../models/thing';
import { ThingService } from '../../core/services/thing-data.service';

@Injectable()
export class ThingsEffects {

    @Effect()
    addThing$: Observable<Action> = this.actions$.pipe(
        ofType<thingsAction.AddAction>(thingsAction.ADD),
        switchMap((action: thingsAction.AddAction) => {
            return this.thingService.add(action.thing).pipe(
                map((data: Thing) => {
                    return new thingsAction.AddCompleteAction(data);
                }),
                catchError((error: any) => of(error)
                ));
        }));

    @Effect()
    deleteThing$: Observable<Action> = this.actions$.pipe(
        ofType<thingsAction.DeleteAction>(thingsAction.DELETE),
        switchMap((action: thingsAction.DeleteAction) => {
            return this.thingService.delete(action.thing.id).pipe(
                map(() => {
                    return new thingsAction.DeleteCompleteAction((action as thingsAction.DeleteAction).thing);
                }),
                catchError((error: any) => of(error)
                ));
        }));

    @Effect()
    getAll$: Observable<Action> = this.actions$.pipe(
        ofType(thingsAction.SELECTALL),
        switchMap(() => {
            return this.thingService.getAll().pipe(
                map((data: Thing[]) => {
                    return new thingsAction.SelectAllCompleteAction(data);
                }),
                catchError((error: any) => of(error)
                ));
        }));


    constructor(
        private thingService: ThingService,
        private actions$: Actions
    ) { }
}
