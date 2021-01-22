import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as thingsAction from './thing.action';
import { ThingService } from '../../core/services/thing-data.service';

@Injectable()
export class ThingsEffects {
  constructor(private thingService: ThingService, private actions$: Actions) {}

  selectAllThings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(thingsAction.getAllThingsAction),
      switchMap((action) =>
        this.thingService.getAll().pipe(
          map((things) =>
            thingsAction.getAllThingsFinishedAction({ payload: things })
          ),
          catchError((error) => of(error))
        )
      )
    )
  );

  addThing$ = createEffect(() =>
    this.actions$.pipe(
      ofType(thingsAction.addThingAction),
      map((action) => action.payload),
      switchMap((payload) =>
        this.thingService.add(payload).pipe(
          map((todo) => thingsAction.addThingFinishedAction({ payload: todo })),
          catchError(error => of(thingsAction.thingsErrorAction(error)))
        )
      )
    )
  );

  deleteThing$ = createEffect(() =>
    this.actions$.pipe(
      ofType(thingsAction.deleteThingAction),
      map((action) => action.payload),
      switchMap((payload) =>
        this.thingService.delete(payload.id).pipe(
          map((_) => thingsAction.deleteThingFinishedAction({ payload })),
          catchError(error => of(thingsAction.thingsErrorAction(error)))
        )
      )
    )
  );
}
