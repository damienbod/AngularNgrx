
import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as thingsAction from './thing.action';
import { ThingService } from '../../core/services/thing-data.service';

@Injectable()
export class ThingsEffects {
  constructor(private thingService: ThingService, private actions$: Actions) { }

  selectAllThings$ = createEffect(() =>
  this.actions$.pipe(
    ofType(thingsAction.selectAllThings),
      switchMap(action =>
        this.thingService.getAll().pipe(
          map(things => thingsAction.selectAllThingsFinished({ payload: things })),
          catchError(error => of(error))
        )
      )
    )
  );

  addThing$ = createEffect(() =>
    this.actions$.pipe(
      ofType(thingsAction.addThing),
      map(action => action.payload),
      switchMap(payload =>
        this.thingService.add(payload).pipe(
          map(todo => thingsAction.addThingFinished({ payload: todo })),
          catchError(error => of(error))
        )
      )
    )
  );

  deleteThing$ = createEffect(() =>
    this.actions$.pipe(
      ofType(thingsAction.deleteThing),
      map(action => action.payload),
      switchMap(payload =>
        this.thingService.delete(payload.id).pipe(
          map(_ => thingsAction.deleteThingFinished({ payload })),
          catchError(error => of(error))
        )
      )
    )
  );

}
