import { HomeState } from './home.state';
import { Thing } from './../../models/thing';
import * as thingsAction from './thing.action';
import { createReducer, on, Action } from '@ngrx/store';

export const initialState: HomeState = {
  things: [],
  selectedThing: null,
  loading: false,
};

const thingsReducerInternal = createReducer(
  initialState,
  on(
    thingsAction.addThingAction,
    thingsAction.addThingFinishedAction,
    thingsAction.deleteThingAction,
    thingsAction.deleteThingFinishedAction,
    thingsAction.getAllThingsAction,
    thingsAction.getAllThingsFinishedAction,
    thingsAction.getThingAction,
    thingsAction.getThingFinishedAction,
    thingsAction.thingsErrorAction,
    (state) => ({
      ...state,
      loading: true,
    })
  ),
  on(thingsAction.addThingFinishedAction, (state, { payload }) => ({
    ...state,
    loading: false,
    things: [...state.things, payload],
  })),
  on(thingsAction.getAllThingsFinishedAction, (state, { payload }) => ({
    ...state,
    loading: false,
    things: [...payload],
  })),
  on(thingsAction.getThingAction, (state, { payload }) => ({
    ...state,
    loading: false,
    selectedItem: payload,
  })),
  on(thingsAction.getThingFinishedAction, (state, { payload }) => ({
    ...state,
    loading: false,
    things: [...state.things.filter((x) => x !== payload)],
  })),
  on(thingsAction.deleteThingFinishedAction, (state, { payload }) => ({
    ...state,
    loading: false,
    things: [...state.things.filter((x) => x !== payload)],
  }))
);

export function thingsReducer(
  state: HomeState | undefined,
  action: Action
): any {
  return thingsReducerInternal(state, action);
}
