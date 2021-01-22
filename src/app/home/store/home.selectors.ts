import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { HomeState } from "./home.state";

export const homeStoreName = 'home';

export const selectHomeStore = createFeatureSelector(homeStoreName)

export const selectLoading = createSelector(
  selectHomeStore,
  (state: HomeState) => state.loading
);

export const selectThings = createSelector(
  selectHomeStore,
  (state: HomeState) => state.things
);
