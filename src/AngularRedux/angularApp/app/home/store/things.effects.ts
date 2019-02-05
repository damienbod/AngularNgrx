import { catchError, map, switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { of ,  Observable } from 'rxjs';

import * as thingsAction from './thing.action';
import { Thing } from './../../models/thing';
import { ThingService } from '../../core/services/thing-data.service';

@Injectable()
export class ThingsEffects {

    @Effect() addThing$ = this.actions$.ofType<thingsAction.AddAction>(thingsAction.ADD).pipe(
        switchMap((action: thingsAction.AddAction) => {
            return this.thingService.add(action.thing).pipe(
                map((data: Thing) => {
                    return new thingsAction.AddCompleteAction(data);
                }),
                catchError((error: any) => of(error)
                ))
        }));

    @Effect() deleteThing$ = this.actions$.ofType<thingsAction.DeleteAction>(thingsAction.DELETE).pipe(
        switchMap((action: thingsAction.DeleteAction) => {
            return this.thingService.delete(action.thing.id).pipe(
                map(() => {
                    return new thingsAction.DeleteCompleteAction((action as thingsAction.DeleteAction).thing);
                }),
                catchError((error: any) => of(error)
                ))
        }));

    @Effect() getAll$: Observable<Action> = this.actions$.ofType(thingsAction.SELECTALL).pipe(
        switchMap(() => {
            return this.thingService.getAll().pipe(
                map((data: Thing[]) => {
                    return new thingsAction.SelectAllCompleteAction(data);
                }),
                catchError((error: any) => of(error)
                ))
        }));


    constructor(
        private thingService: ThingService,
        private actions$: Actions
    ) { }
}
