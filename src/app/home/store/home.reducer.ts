import { HomeState } from './home.state';
import { Thing } from './../../models/thing';
import * as thingsAction from './thing.action';
import { createReducer, on, Action } from '@ngrx/store';

export const initialState: HomeState = {
  things: [],
  selectedThing: null,
  loading: false
};

const thingsReducerInternal = createReducer(
  initialState,
  on(
    thingsAction.addThing,
    thingsAction.addThingFinished,
    thingsAction.deleteThing,
    thingsAction.deleteThingFinished,
    thingsAction.selectAllThings,
    thingsAction.selectAllThingsFinished,
    thingsAction.selectThing,
    thingsAction.selectThingFinished,
    state => ({
      ...state,
      loading: true
    })
  ),
  on(thingsAction.addThingFinished, (state, { payload }) => ({
    ...state,
    loading: false,
    items: [...state.things, payload]
  })),
  on(thingsAction.selectAllThingsFinished, (state, { payload }) => ({
    ...state,
    loading: false,
    items: [...payload]
  })),
  on(thingsAction.selectThing, (state, { payload }) => ({
    ...state,
    loading: false,
    selectedItem: payload
  })),
  on(thingsAction.selectThingFinished, (state, { payload }) => ({
    ...state,
    loading: false,
    items: [...state.things.filter(x => x !== payload)]
  }))
);

export function thingsReducer(
  state: HomeState | undefined,
  action: Action
) {
  return thingsReducerInternal(state, action);
}
