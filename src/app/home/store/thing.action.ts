import { createAction, props } from '@ngrx/store';
import { Thing } from './../../models/thing';

export const selectAllThings = createAction(
  '[Things] Select Things'
);
export const selectAllThingsFinished = createAction(
  '[Things] Select Things Finished',
  props<{ payload: Thing[] }>()
);
export const addThing = createAction(
  '[Thing] Add',
  props<{ payload: Thing }>()
);
export const addThingFinished = createAction(
  '[Thing] Add Complete',
  props<{ payload: Thing }>()
);
export const deleteThing = createAction(
  '[Thing] Delete Thing',
  props<{ payload: Thing }>()
);
export const deleteThingFinished = createAction(
  '[Thing] Delete Thing Finished',
  props<{ payload: Thing }>()
);
export const selectThing = createAction(
  '[Thing] Select Thing',
  props<{ payload: string }>()
);
export const selectThingFinished = createAction(
  '[Thing] Select Thing Finished',
  props<{ payload: Thing }>()
);
