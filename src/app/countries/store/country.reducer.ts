import { CountryState } from './country.state';
import * as countryAction from './country.action';
import { createReducer, on, Action } from '@ngrx/store';

export const initialState: CountryState = {
  countries: [],
  loading: false,
};

const countryReducerInternal = createReducer(
  initialState,
  on(
    countryAction.getAllCountriesAction,
    countryAction.getAllCountriesFinishedAction,
    countryAction.countriesErrorAction,
    (state) => ({
      ...state,
      loading: true,
    })
  ),
  on(countryAction.getAllCountriesFinishedAction, (state, { payload }) => ({
    ...state,
    loading: false,
    countries: [...payload],
  }))
);

export function countryReducer(
  state: CountryState | undefined,
  action: Action
): any {
  return countryReducerInternal(state, action);
}
