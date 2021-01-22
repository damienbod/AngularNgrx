import { CountryState } from './country.state';
import { Region } from './../../models/region';
import * as countryAction from './country.action';
import { createReducer, on, Action } from '@ngrx/store';

export const initialState: CountryState = {
  countries: [],
  loading: false,
};

const countryReducerInternal = createReducer(
  initialState,
  on(
    countryAction.collapseRegionAction,
    countryAction.getAllCountriesAction,
    countryAction.getAllCountriesFinishedAction,
    countryAction.getRegionAction,
    countryAction.getRegionFinishedAction,
    (state) => ({
      ...state,
      loading: true,
    })
  ),
  on(countryAction.getAllCountriesFinishedAction, (state, { payload }) => ({
    ...state,
    loading: false,
    countries: [...state.countries, ...payload],
  }))
);

export function countryReducer(
  state: CountryState | undefined,
  action: Action
): any {
  return countryReducerInternal(state, action);
}
