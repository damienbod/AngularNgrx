import { createAction, props } from '@ngrx/store';
import { Thing } from './../../models/thing';

export const getAllThingsAction = createAction('[Things] get Things');
export const getAllThingsFinishedAction = createAction(
  '[Things] get Things Finished',
  props<{ payload: Thing[] }>()
);
export const addThingAction = createAction(
  '[Thing] Add',
  props<{ payload: Thing }>()
);
export const addThingFinishedAction = createAction(
  '[Thing] Add Complete',
  props<{ payload: Thing }>()
);
export const deleteThingAction = createAction(
  '[Thing] Delete Thing',
  props<{ payload: Thing }>()
);
export const deleteThingFinishedAction = createAction(
  '[Thing] Delete Thing Finished',
  props<{ payload: Thing }>()
);
export const getThingAction = createAction(
  '[Thing] get Thing',
  props<{ payload: string }>()
);
export const getThingFinishedAction = createAction(
  '[Thing] get Thing Finished',
  props<{ payload: Thing }>()
);
export const thingsErrorAction = createAction(
  '[Thing] things Error',
  props<{ payload: any }>()
);
